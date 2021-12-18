<template>
    <v-card width="450px" class="mx-auto mt-2">
        <v-card-title>
            <h1 class="display-1">プロフィール変更</h1>
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
                <!-- 郵便番号入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="postNumber"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-currency-kzt"
                            label="郵便番号"
                            :rules="postNumberRules"
                            required
                        />
                    </v-col>
                </v-row>
                <!-- 住所入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="address"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-map-marker"
                            label="住所"
                            :rules="addressRules"
                            required
                        />
                        
                    </v-col>
                </v-row>
                <!-- 電話番号入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="tel"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-phone-in-talk"
                            label="電話番号"
                            :rules="telRules"
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
    import { getAuth, onAuthStateChanged } from "firebase/auth"
    import { getDatabase, ref, child, get } from "firebase/database"
    export default {

        name: "changeDetails",
        data() {
            return {
                valid: true,
                //初期値をデータベースから引っ張ってくる
                // メールアドレス
                mailaddress: "",
                // 郵便番号
                postNumber: "",
                // 住所
                address: "",
                // 電話番号
                tel: "",
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
            getUsersDB(){
                onAuthStateChanged(getAuth(), (user) => {
                    if (user) {
                        const dbRef = ref(getDatabase());
                        get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            console.log(snapshot.val())
                            this.mailaddress = snapshot.val().mailaddress
                            this.postNumber = snapshot.val().postNumber
                            this.address = snapshot.val().address
                            this.tel = snapshot.val().tel
                            this.password = snapshot.val().password
                            this.againpassword = snapshot.val().againpassword
                        } else {
                            console.log("No data available")
                        }
                        }).catch((error) => {
                            console.error(error)
                        })
                    }
                })
            },
        },
        computed: {

        },
        created() {
            this.getUsersDB()
        },
    }
</script>
