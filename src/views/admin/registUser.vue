<template>
    <v-card width="450px" class="mx-auto mt-2">
        <v-card-title>
            <h1 class="display-1">ユーザ新規登録</h1>
        </v-card-title>
        <v-card-text>
            <v-form v-model="valid">
                <!-- mail入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                        v-model="mailaddress"
                        class="ma-0 pa-0 pb-6"
                        prepend-icon="mdi-email"
                        label="メールアドレス"
                        hint="メールアドレスは50字以下で記入してください。"
                        :rules="emailRules"
                        counter
                        required
                        />
                    </v-col>
                </v-row>
                <!--パスワード入力-->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                        v-model="password"
                        class="ma-0 pa-0 pb-6"
                        prepend-icon="mdi-lock"
                        :type="showPassword ? 'text' : 'password'"
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        label="パスワード"
                        hint="パスワードは6字以上20字以下にしてください。"
                        :rules="passwordRules"
                        counter
                        required
                        />
                    </v-col>
                </v-row>
                <!-- パスワード再入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="againpassword"
                            class="ma-0 pa-0 pb-6"
                            :type="showAgainPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                            :append-icon="showAgainPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showAgainPassword = !showAgainPassword"
                            :rules="againpasswordRules"
                            counter
                            label="確認用パスワード"
                            required/>
                    </v-col>
                </v-row>
                <v-btn @click="regist" :disabled="!valid">送信</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
    import {
        getAuth,
        onAuthStateChanged,
        createUserWithEmailAndPassword,
    } from "firebase/auth"
    import { getFirestore, collection, addDoc } from "firebase/firestore"

    export default {
        name: "Regist",
        data() {
            return {
                valid: true,
                // メールアドレス
                mailaddress: "",
                // パスワード
                password: "",
                // 確認用パスワード
                againpassword: "",
                showPassword: false,
                // ここからルール
                // メールアドレス
                emailRules: [
                    v => !!v || 'E-mailが入力されていません',
                    v => /.+@.+\..+/.test(v) || 'E-mailの書式が間違っています',
                    v => /^\S+@\S+\.\S+$/.test(v) || 'E-mailの書式が間違っています',
                    v => /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(v) || 'E-mailの書式が間違っています',
                ],
                // パスワード
                passwordRules: [
                    v => !!v || 'パスワードが入力されていません',
                    v => /^[0-9a-zA-Z]*$/.test(v) || '全半角英数字のみ使用可能です',
                    v => (v && v.length >= 6) || 'パスワードは6文字以上で入力してください',
                    v => (v && v.length <= 12) || 'パスワードは12文字以内で入力してください',
                ],
                // 確認用パスワード
                againpasswordRules:[
                    v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
                    v => (v&& v === this.password) || 'パスワードが一致していません。',
                ],
            }
        },
        components: {},
        methods: {
            regist() {
            createUserWithEmailAndPassword(getAuth(), this.mailaddress, this.password)
                .then(() => {
                console.log("user created");
                alert("success! user created")
                onAuthStateChanged(getAuth(), (user) => {
                    if (user) {
                        // User logged in already or has just logged in.
                        // ユーザーIDの取得
                        const db = getFirestore()
                        addDoc(collection(db, "users", user.uid, 'bid'), {
                        email: this.mailaddress,
                    });
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
        },
        created() {},
    }
</script>