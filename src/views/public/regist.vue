<template>
  <v-card width="450px" class="mx-auto mt-2">
    <v-card-title>
      <h1 class="display-1">会員登録</h1>
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
      mailaddress: "",
      password: "",
      showPassword: false,
      emailRules: [
        v => !!v || 'E-mailが入力されていません',
        v => /.+@.+\..+/.test(v) || 'E-mailの書式が間違っています',
        v => /^\S+@\S+\.\S+$/.test(v) || 'E-mailの書式が間違っています',
        v => /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(v) || 'E-mailの書式が間違っています',
      ],
      passwordRules: [
        v => !!v || 'パスワードが入力されていません',
        v => /^[0-9a-zA-Z]*$/.test(v) || '全半角英数字のみ使用可能です',
        v => (v && v.length >= 6) || 'パスワードは6文字以上で入力してください',
        v => (v && v.length <= 12) || 'パスワードは12文字以内で入力してください',
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
