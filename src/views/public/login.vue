<template>
    <v-main class="ma-0 pa-0" style="background:radial-gradient(#fff,#707070); height:100%">
        <v-navigation-drawer class="ma-0 pa-0" hide-overlay fixed height style="width:100%;" permanent touchless>
			<Header/>
		</v-navigation-drawer>
        <v-card width="400px" class="mx-auto mt-2">
            <v-card-title>
                <h1 class="display-1">ログイン</h1>
            </v-card-title>
            <v-card-text>
                <v-form v-model="valid">
                    <!-- mail入力 -->
                    <v-text-field
                        v-model="mailaddress"
                        class="ma-0 pa-0 pb-6"
                        prepend-icon="mdi-email"
                        label="e-mail"
                        hint="メールアドレスは50字以下で記入してください。"
                        :rules="emailRules"
                        counter
                        required
                    />
                    <!--パスワード入力-->
                    <v-text-field
                        v-model="password"
                        class="ma-0 pa-0 pb-6"
                        prepend-icon="mdi-lock"
                        :type="showPassword ? 'text' : 'password'"
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        label="password"
                        hint="パスワードは6字以上20字以下にしてください。"
                        :rules="passwordRules"
                        counter
                        required
                    />
                    <v-btn @click="login" :disabled="!valid">送信</v-btn>
                    <v-btn @click="logout">確認用ログアウト</v-btn>
                    <div v-if="this.isLoggedIn">{{this.$store.getters.user}}でログインできてまーす</div>
                    <div v-if="!this.isLoggedIn">ログアウト状態</div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-main>
</template>

<script>
import Header from '@/components/public/Header'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { getDatabase, ref, set, get, child } from "firebase/database"
export default {
    name: "Login",
    data() {
        return {
            valid: true,
            mailaddress: "",
            password: "",
            showPassword: false,
            isLoggedIn: false,
            status: "",
            heartRate: Number,
            emailRules: [
                v => !!v || 'E-mailが入力されていません',
                v => /.+@.+\..+/.test(v) || 'E-mailの書式が間違っています',
                v => /^\S+@\S+\.\S+$/.test(v) || 'E-mailの書式が間違っています',
                v => /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(v) || 'E-mailの書式が間違っています',
            ],
            passwordRules: [
                v => !!v || 'パスワードが入力されていません',
                v => (v && v.length >= 6) || 'パスワードは6文字以上で入力してください',
            ]
        }
    },
    components: {
        Header
    },
    methods: {
        login() {
            signInWithEmailAndPassword(getAuth(), this.mailaddress, this.password).then(() => {
                // Signed in
                onAuthStateChanged(getAuth(), user=> {
                    if(user) {
                        console.log(user.email)
                        this.$store.commit("onAuthStateChanged", user.email)
                    
                        const db = getDatabase()
                        const dbRef = ref(getDatabase())
                        get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
                            if (snapshot.exists()) {
                                console.log(snapshot.val())
                                this.heartRate = snapshot.val().heart_rate
                                set(ref(db, 'monitor'), {
                                    uid: user.uid,
                                    heart_rate: this.heartRate
                                })
                            }
                            else {
                                console.log("No data available")
                            }
                        }).catch((error) => {
                            console.error(error)
                        })
                    }
                })
                alert("成功")
                this.$store.commit("onUserLoginStatusChanged", true)
                this.isLoggedIn = true
            }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert("失敗", errorCode, errorMessage)
            })
        },
        logout() {
            this.$store.dispatch("logOut")
            location.reload()
        },
    },
    created() {
        this.isLoggedIn = this.$store.getters.isLoggedIn
    },
    computed: {},
}
</script>