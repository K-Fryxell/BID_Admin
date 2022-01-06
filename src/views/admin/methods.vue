<template>
    <div>
        <v-btn @click="addVitalLog">vitalLog挿入(通知送信)</v-btn>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase, ref, child, get, set } from "firebase/database"
//import * as functions from 'firebase-functions'

export default {
    data () {
        return {
            username:"",
            heartRate:""
        }
    },
    methods: {
        getUsersDB(){
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    const dbRef = ref(getDatabase())
                    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val())
                        this.username = snapshot.val().username
                        this.heartRate = snapshot.val().heart_rate
                    } else {
                        console.log("No data available")
                    }
                    }).catch((error) => {
                        console.error(error)
                    })
                }
            })
        },
        addVitalLog(){
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    // User logged in already or has just logged in.
                    // ユーザーIDの取得
                    const db = getDatabase()
                    set(ref(db, 'users/' + user.uid + '/vitalLog'), {
                        flg: 1
                    })
                }
            })
        }
    },
    created:function(){
        this.getUsersDB()
    }
}
</script>
