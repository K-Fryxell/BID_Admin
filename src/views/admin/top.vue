<template>
    <div>
        <v-btn @click="getUsersDB">読み取り(ログ出力)</v-btn>
        <v-btn @click="updateHeartRateDB">hertRate更新(onUpdate発火)</v-btn>
        <p>{{ username }}</p>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase, ref, child, get, update } from "firebase/database"
//import * as functions from 'firebase-functions'

export default {
    name: 'Home',
    components: {
    
    },
    data () {
        return {
            username:""
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
                    } else {
                        console.log("No data available")
                    }
                    }).catch((error) => {
                        console.error(error)
                    })
                }
            })
        },
        updateHeartRateDB(){
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    const db = getDatabase()
                    //更新内容を設定
                    const postData = {
                        heartRate: 300,
                        uid: user.uid,
                        email: this.$store.getters.user,   
                    }
                    //更新テーブルの決定(複数可)
                    const updates = {}
                    updates['/monitor/'] = postData
                    //設定した内容でアップデート
                    update(ref(db), updates).then(() => {
                        console.log('update success')
                    }).catch((error) => {
                        console.log('update failed\n' + error)
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
