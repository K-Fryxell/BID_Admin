const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require("nodemailer")
const cors = require("cors")({ origin: true })
admin.initializeApp(functions.config().firebase)

const pushMessage = (fcmToken) => ({
    notification: {
        title: '【BID通知システム】',
        body: '１件の異常を発見しました',
    },
    data: {
        data: 'test',
    },
    token: fcmToken
})

exports.sendMention = functions.database.ref('/users/{uid}/vitalLog').onWrite(() => {
    const token = "dc2IY56LQhOZYW4dfNUWTi:APA91bFRL-ZvuDntoWJDPTBSZ58GCG-weQUpsntFItbWzTUPkKK8cV8b-G2DNI4CoYhwaCv4P6aEv5tcBXEztFUGD1n3EsdW_kTTGqQ00MHnYLgFGj8z78mto-Usn7T1tBGL0OPRsy4O"
    admin.messaging().send(pushMessage(token, "１件の異常を発見しました"))
        .then((response) => { console.log('Successfully sent message:', response) })
        .catch((e) => { console.log('Error sending message:', e) })
})

exports.sendMail = functions.database.ref('/monitor').onWrite((snapshot, context) => {
    functions.logger.log(snapshot)
    functions.logger.log(context)
    const b = snapshot.before.val().heart_rate
    const a = snapshot.after.val().heart_rate
    functions.logger.log(b)
    functions.logger.log(a)
    if (a>b && a-b>30 || b>a && b-a>30) {
        //メール送信処理
        const from = functions.config().gmail.email
        const to = "kaitoiwakura2@gmail.com"
        const smtpConfig = {
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: from,
                pass: functions.config().gmail.password,
            },
        }
        const transporter = nodemailer.createTransport(smtpConfig)

        const mailOptions = {
            from: from,
            to: to,
            subject: "【BID緊急通知システム】救急要請",
            html: `
            -- 個人情報 --
            名前：春 太郎
            性別：女
            住所：〒160-0023 東京都新宿区西新宿1-7-3


            -- 場所・原因 --
            時間：12/15 AM10:10
            場所：東京都新宿区西新宿1-7-3
            原因：心筋梗塞

            -- 状態 --
            体温：37.3℃
            心拍数：0bpm
            最高血圧：128mmHg
            最低血圧：81mmHg
            意識レベル：Ⅲ-1
            `,
        }

        // Getting results
        const result = transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return "error: " + err.toString()
            }
            return "success: " + info.toString()
        })
        res.send(result)
        // ログ
        functions.logger.log("送信成功!!")
    }
    else {
        //ログ
        functions.logger.log("失敗")
    }
})

exports.test = functions.https.onRequest(async (req, res) => {
    cors(req, res, () => {
        const from = functions.config().gmail.email
        const to = "ak.lumina.inc@gmail.com"
        const msg = "成功しました!!"
        const smtpConfig = {
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: from,
                pass: functions.config().gmail.password,
            },
        }
        const transporter = nodemailer.createTransport(smtpConfig)

        const mailOptions = {
            from: from,
            to: to,
            subject: "This is a sample of email function",
            html: `${msg}`,
        }

        // Getting results
        const result = transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return "error: " + err.toString()
            }
            return "success: " + info.toString()
        })
        res.send(result)
    })
})