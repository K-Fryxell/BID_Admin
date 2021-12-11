<template>
  <v-card width="400px" class="mx-auto mt-2">
    <v-card-title>
      <h1 class="display-1">ログイン</h1>
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
        <v-btn @click="login" v-bind:disabled="activeLogin">送信</v-btn>
        <v-btn @click="logout">確認用ログアウト</v-btn>
        <div v-if="this.isLoggedIn">現状変化ないけどログインできてまーす</div>
        <div v-if="!this.isLoggedIn">ログアウト状態</div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default {
  name: "Login",
  data() {
    return {
      mailaddress: "",
      password: "",
      showPassword: false,
      isLoggedIn: false,
      status: "",
    };
  },
  components: {},
  methods: {
    login() {
      signInWithEmailAndPassword(getAuth(), this.mailaddress, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          // ...
          alert("成功", user);
          this.$store.commit("onUserLoginStatusChanged", true)
          this.isLoggedIn = true
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          alert("失敗", errorCode, errorMessage)
        });
    },
    logout() {
      this.$store.dispatch("logOut")
      location.reload()
    },
  },
  created() {
    this.isLoggedIn = this.$store.getters.isLoggedIn
  },
  computed: {
    mailRequired() {
      return this.mailaddress == ""
    },
    passwordRequired() {
      return this.password == ""
    },
    activeLogin() {
      if (this.mailaddress == "") {
        return true
      } else if (this.password == "") {
        return true
      } else {
        return false
      }
    },
  },
};
</script>
