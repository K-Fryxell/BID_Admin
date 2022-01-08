<template>
    <v-main class="ma-0 pa-0" style="background:radial-gradient(#fff,#707070); height:100%">
        <v-row class="ma-0 pa-0" justify="center" @click="login">
            <img width="18%" src="@/assets/logo1.png" style="margin: 50vh auto 0; transform: translateY(-50%);">
        </v-row>
        <!-- 不審者発見モーダル -->
        <v-dialog v-model="crimeVitalLogModal" width="500">
            <v-card>
                <v-row class="ma-0 pa-0 pt-5" justify="center">
                    <img src="@/assets/bikkuri.png" alt="異常値検出マーク">
                </v-row>
                <v-row class="ma-0 mt-4 pa-0" justify="center">
                    <v-col lg="11">
                        <v-card-text class="text-lg-h6 subtitle-1">
                            付近で不審者が現れました。<br/>充分な警戒を行ってください。
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-row justify="end" class="pa-0 ma-0 pb-6 lg-mr-10 mr-6">
                    <v-btn width="50" @click="crimeVitalLogModal=false">
                        閉じる
                    </v-btn>
                </v-row>
            </v-card>
        </v-dialog>
    </v-main>
</template>
<script>
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { getDatabase, ref, child, get } from "firebase/database"
export default {
    data() {
        return {
            crimeVitalLogModal:false,
            mailaddress: "sample@hal.ac.jp",
            password: "password",
            isLoggedIn: false,
            flg1: 0
        }
    },
    methods: {
        login() {
            signInWithEmailAndPassword(getAuth(), this.mailaddress, this.password).then(() => {
                // Signed in
                onAuthStateChanged(getAuth(), user=> {
                    if(user) {
                        const dbRef = ref(getDatabase())
                        get(child(dbRef, `users/${user.uid}/crimeVitalLog`)).then((snapshot) => {
                            if (snapshot.exists()) {
                                this.flg1 = snapshot.val().flg1
                            }
                        }).catch((error) => {
                            console.error(error)
                        })
                        console.log(user.email)
                        this.$store.commit("onAuthStateChanged", user.email)
                    }
                })
                alert("ログインしました")
                this.$store.commit("onUserLoginStatusChanged", true)
                this.isLoggedIn = true
                this.$router.push('top')
            }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert("失敗", errorCode, errorMessage)
            })
        }
    },
    watch:{
        flg1:function(){
            if(this.flg1 == 1){
                this.crimeVitalLogModal = true
            }
            else{
                this.crimeVitalLogModal = false
            }
        }
    },
    created() {
        this.isLoggedIn = this.$store.getters.isLoggedIn
    }
}
</script>
