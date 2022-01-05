const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require("nodemailer")
const cors = require("cors")({ origin: true })
admin.initializeApp(functions.config().firebase)

const pushMessage = (fcmToken) => ({
    notification: {
        title: '【BID通知システム】',
        body: '送信成功!!',
    },
    data: {
        data: 'test',
    },
    token: fcmToken
})

exports.sendMention = functions.database.ref('/users/{uid}/vitalLog').onWrite(() => {
    const token = "fvjjznqaS0KUdF8RtJ5KP1:APA91bHREEmTV0Z8ozs_Yrli0WQRqLPeSYK75b_FLA_0cZQp48frvaG8sKV3-FkbIClxlm511aoA3GuNvqGkEdisYNlkrRP5VVauQ9PS8vm1ssMiNsAJ4GiekNdiOhDLyrycQOLnxHns"
    admin.messaging().send(pushMessage(token, "プッシュ通知テスト"))
        .then((response) => { console.log('Successfully sent message:', response) })
        .catch((e) => { console.log('Error sending message:', e) })
})

exports.sendMail = functions.database.ref('/monitor').onWrite((snapshot, context) => {
    functions.logger.log(snapshot)
    functions.logger.log(context)
    const g = snapshot.after.val().heart_rate
    functions.logger.log(g)
    if (g <= 30) {
        //メール送信処理
        const from = functions.config().gmail.email
        const to = "k.fryxell.2@gmail.com"
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
        // ログ
        functions.logger.log("異常値")
    }
    else {
        //ログ
        functions.logger.log("正常値")
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