<template>
    <v-main class="ma-0 pa-0" style="background:radial-gradient(#fff,#c5c5c5); height:100%">
        <v-row class="ma-0 pa-0" justify="center" @click="login">
            <img width="18%" src="@/assets/logo1.png" style="margin: 50vh auto 0; transform: translateY(-50%);">
        </v-row>
    </v-main>
</template>
<script>
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
export default {
    data() {
        return {
            mailaddress: "sample@hal.ac.jp",
            password: "password",
            isLoggedIn: false
        }
    },
    methods: {
        login() {
            signInWithEmailAndPassword(getAuth(), this.mailaddress, this.password).then(() => {
                // Signed in
                onAuthStateChanged(getAuth(), user=> {
                    if(user) {
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
    created() {
        this.isLoggedIn = this.$store.getters.isLoggedIn
    }
}
</script>
