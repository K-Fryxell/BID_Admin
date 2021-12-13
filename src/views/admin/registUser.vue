<template>
    <v-card width="450px" class="mx-auto mt-2">
        <v-card-title>
            <h1 class="display-1">ユーザ新規登録</h1>
        </v-card-title>
        <v-card-text>
            <v-form v-model="valid">
                <!-- 氏名入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col cols="6" lg="4">
                        <v-text-field
                            prepend-icon="mdi-account-circle"
                            v-model="fname"
                            class="ma-0 pa-0 pb-6"
                            label="姓"
                            :rules="fnameRules"/>
                    </v-col>
                    <v-col cols="6" lg="4">
                        <v-text-field
                            v-model="lname"
                            class="ma-0 pa-0 pb-6"
                            label="名"
                            :rules="lnameRules"/>
                    </v-col>
                </v-row>
                <!-- 性別入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col cols="12" lg="12">
                        <v-radio-group
                            prepend-icon="mdi-human-male-female"
                            v-model="sex" :mandatory="false" row>
                            <v-radio label="男性"/>
                            <v-radio label="女性"/>
                        </v-radio-group>
                    </v-col>
                </v-row>
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
                <!-- 身長入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="height"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-human-male-height-variant"
                            :rules="heightRules"
                            label="身長（cm）"
                            required/>
                    </v-col>
                </v-row>
                <!-- 体重入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="weight"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-weight-kilogram"
                            label="体重（kg）"
                            :rules="weightRules"
                            required
                        />
                    </v-col>
                </v-row>
                <!-- 持病入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="chronicCondition"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-emoticon-sick"
                            label="持病"
                            hint="複数の持病をお持ちの方は句読点で区切って入力してください"
                            :rules="chronicConditionRules"
                            required
                        />
                    </v-col>
                </v-row>
                <!-- 妊娠情報入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col cols="12" lg="12">
                        <v-radio-group
                            prepend-icon="mdi-human-pregnant"
                            v-model="pregnancy" :mandatory="false" row>
                            <v-radio label="妊娠している"/>
                            <v-radio label="妊娠していない"/>
                        </v-radio-group>
                    </v-col>
                </v-row>
                <!-- 喫煙情報入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col cols="12" lg="12">
                        <v-radio-group
                            prepend-icon="mdi-smoking"
                            v-model="smoker" :mandatory="false" row>
                            <v-radio label="喫煙者"/>
                            <v-radio label="非喫煙者"/>
                        </v-radio-group>
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
                // 苗字
                fname:'',
                // 名前
                lname:'',
                // 性別
                sex: '',
                // メールアドレス
                mailaddress: "",
                // パスワード
                password: "",
                // 確認用パスワード
                againpassword: "",
                // 郵便番号
                postNumber: "",
                // 住所
                address: "",
                // 電話番号
                tel: "",
                // 身長
                height: "",
                // 体重
                weight: "",
                // 持病
                chronicCondition: "",
                // 妊娠
                pregnancy: "",
                // 喫煙
                smoker: "",
                
                showPassword: false,
                // ここからルール
                // 苗字
                fnameRules: [
                    v => !!v || '入力欄が空白です。',
                    v => /^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ン一-龥]+$/.test(v) || '使用できない文字が含まれています。'
                ],
                // 名前
                lnameRules: [
                    v => !!v || '入力欄が空白です。',
                    v => /^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ン一-龥]+$/.test(v) || '使用できない文字が含まれています。'
                ],
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
                // 郵便番号
                postNumberRules: [
                    v => !!v || '入力欄が空白です。',
                    v => /^[0-9]{3}-[0-9]{4}$/.test(v) || '郵便番号の形式が違います',

                ],
                // 住所
                addressRules: [
                    v => !!v || '住所は必ず入力してください。',
                    v => (v && v.length <= 50) || '住所は50字以内にて入力してください。',
                    // eslint-disable-next-line no-irregular-whitespace
                    v => /^[^ 　]+$/.test(v) || 'スペースが入力されています。削除してください。',
                    // eslint-disable-next-line no-control-regex
                    v => /^[^\x01-\x7E\xA1-\xDF]+$/.test(v) || '住所は全角にて入力してください。'
                ],
                // 電話番号
                telRules: [
                    v => !!v || '入力欄が空白です。',
                    v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
                    v => /^0[789]0-[0-9]{4}-[0-9]{4}$/.test(v) || '電話番号の形式が違います'
                ],
                // 身長
                heightRules: [
                v => !!v || '入力欄が空白です。',
                v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
                ],
                // 体重
                weightRules: [
                    v => !!v || '入力欄が空白です。',
                    v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
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