<template>
    <div>
        <v-btn @click="getUsersDB">書き込み</v-btn>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { getDatabase, ref, child, get } from "firebase/database"

export default {
    name: 'Home',
    components: {
    
    },
    data () {
        return {
            users: [],
        }
    },
    methods: {
        getUsersDB(){
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    const dbRef = ref(getDatabase());
                    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val())
                    } else {
                        console.log("No data available")
                    }
                    }).catch((error) => {
                        console.error(error)
                    })
                }
            })
        },
        getUsers() {
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    // ログイン中のユーザの情報の取得 (firestore)
                    const db = getFirestore()
                    const docRef = doc(db, "users", user.uid, "bid", user.uid)
                    getDoc(docRef).then(doc =>{
                        console.log(doc.data())
                    })
                    this.$store.commit("onAuthStateChanged", user.uid)
                    if (user.uid) {
                        //データベース参照用uid
                        console.log(this.$store.getters.user)
                        //セッション確認用フラグ
                        console.log(this.$store.getters.isLoggedIn)
                    } else {
                        console.log("ユーザ情報取得に失敗")
                    }
                }
            })
        }
    },
    created:function(){
        // this.getUsers()
    }
}
</script>
