const functions = require('firebase-functions')
const admin = require('firebase-admin')
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

exports.sendMentions = functions.database.ref('/users/{uid}/vitalLog').onWrite(() => {
    const token = "fvjjznqaS0KUdF8RtJ5KP1:APA91bHREEmTV0Z8ozs_Yrli0WQRqLPeSYK75b_FLA_0cZQp48frvaG8sKV3-FkbIClxlm511aoA3GuNvqGkEdisYNlkrRP5VVauQ9PS8vm1ssMiNsAJ4GiekNdiOhDLyrycQOLnxHns"
    admin.messaging().send(pushMessage(token, "プッシュ通知テスト"))
        .then((response) => { console.log('Successfully sent message:', response) })
        .catch((e) => { console.log('Error sending message:', e) })
})

exports.sendMails = functions.database.ref('/monitor').onWrite((snapshot) => {
    functions.logger.log(snapshot.after.data())
    const g = snapshot.after.data().heartRate
    if (g <= 30) {
        axios.get('http://localhost:8000/mail/?recipient=???@gmail.com&abnormal_num=0&detail_num=0')
            .then(function (response) {
                alert(response)
            })
            .catch(function (error) {
                console.log(error)
            })
        //???gmail.comの値は各々で受信したいメールアドレスを入力して下さい
    }
})