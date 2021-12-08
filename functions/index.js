const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const pushMessage = (fcmToken) => ({
    notification: {
        title: 'Hello!!',
        body: 'Success!!',
    },
    data: {
        data: 'test',
    },
    token: fcmToken
})

exports.sendMessages = functions.firestore.document('users/{email}').onCreate((_snapshot, context) => {
    const token = "fvjjznqaS0KUdF8RtJ5KP1:APA91bHREEmTV0Z8ozs_Yrli0WQRqLPeSYK75b_FLA_0cZQp48frvaG8sKV3-FkbIClxlm511aoA3GuNvqGkEdisYNlkrRP5VVauQ9PS8vm1ssMiNsAJ4GiekNdiOhDLyrycQOLnxHns"
    admin.messaging().send(pushMessage(token, "プッシュ通知テスト"))
        .then((response) => { console.log('Successfully sent message:', response) })
        .catch((e) => { console.log('Error sending message:', e) })
})