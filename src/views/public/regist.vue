<template>
	<div>
    <!-- mail入力 -->
		<v-text-field
			v-model="mailaddress"
			class="ma-0 pa-0 pb-6"
			prepend-icon="mdi-email"
			label="E-mail"
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
			hint="パスワードは8字以上20字以下にしてください。"
			counter
			required
		/>
		<v-btn @click="regist">送信</v-btn>
	</div>
</template>

<script>
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default {
	name: 'Home',
	data() {
		return {
            mailaddress: '',
			password: '',
			showPassword: false,
		}
	},
	components: {},
	methods: {
		regist() { 
			createUserWithEmailAndPassword(getAuth(), this.mailaddress, this.password).then(() => {
				console.log('user created')
				alert('success! user created')
				onAuthStateChanged(getAuth(),user => {
					if (user) {
						// User logged in already or has just logged in.
						// ユーザーIDの取得
						const db = getFirestore()
						addDoc(collection(db, 'users'), {
							email: this.mailaddress,
						})
						console.log(user.uid)
					}
				})
			}).catch((error) => {
				alert(error.message)
				console.error(error)
				alert('error!')
			})
		}
	},
	created() {
	},
}
</script>
