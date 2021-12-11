<template>
    <v-card width="450px" class="mx-auto mt-2">
        <v-card-title>
            <h1 class="display-1">会員登録</h1>
        </v-card-title>
        <v-card-text>
            <v-form>
                <!-- mail入力 -->
                <v-text-field
                    v-model="mailaddress"
                    class="ma-0 pa-0 pb-6"
                    prepend-icon="mdi-email"
                    label="e-mail"
                    hint="メールアドレスは50字以下で記入してください。"
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
                    counter
                    required
                />
                <p v-if="mailRequired" class="error-message">メールアドレスを入力してください</p>
                <p v-if="passwordRequired" class="error-message">パスワードを入力してください</p>
                <v-btn @click="regist" v-bind:disabled="activeRegist">送信</v-btn>
             </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, setDoc, doc } from "firebase/firestore"

export default {
    name: "Regist",
    data() {
        return {
        mailaddress: "",
        password: "",
        showPassword: false,
        }
    },
    components: {},
    methods: {
        regist() {
            createUserWithEmailAndPassword(getAuth(), this.mailaddress, this.password).then(() => {
                console.log("user created");
                alert("success! user created")
                onAuthStateChanged(getAuth(), (user) => {
                    if (user) {
                        // User logged in already or has just logged in.
                        // ユーザーIDの取得
                        const db = getFirestore()
                        const docRef = doc(db, "users", user.uid, "bid", user.uid)
                        const data = {
                            email: this.mailaddress
                        }
                        setDoc(docRef,data)
                        //登録後のuser情報、セッション情報をstoreに保存
                        this.$store.commit("onAuthStateChanged", user.uid)
                        if (user.uid) {
                            //セッション情報をログイン状態に
                            this.$store.commit("onUserLoginStatusChanged", true)
                            //データベース参照用uid
                            console.log(this.$store.getters.user)
                            //セッション確認用フラグ
                            console.log(this.$store.getters.isLoggedIn)
                        } else {
                            console.log("ユーザ情報取得に失敗")
                        }
                    }
                })
            })
            .catch((error) => {
                alert(error.message)
                console.error(error)
                alert("error!")
            })
        },
    },
    computed: {
        mailRequired() {
        return this.mailaddress == ""
        },
        passwordRequired() {
        return this.password == ""
        },
        activeRegist() {
        if (this.mailaddress == "") {
            return true
        } else if (this.password == "") {
            return true
        } else {
            return false
        }
        },
    },
    created() {},
}
</script>
