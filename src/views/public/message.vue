<template>
  <section class="container">
    <v-text-field v-model="message"></v-text-field>
    <v-row v-for="(user, key, index) in users" :key="index">
      <v-col>
        <p>{{ user.data.familyName }} {{ user.data.firstName }}</p>
      </v-col>
      <v-col>
        <v-btn @click="sendMessage(user.uid)">プッシュ通知</v-btn>
      </v-col>
    </v-row>
  </section>
</template>
<script>
// import firebase from 'firebase'
// const db = firebase.firestore()

// export default {
//   data() {
//     return {
//       message: "",
//       users: []
//     }
//   },
//   created() {
//     this.getUsers()
//   },
//   methods: {
//     async getUsers() {
//       const snapShot = await db.collection("users").get()
//       this.users = snapShot.docs.map(doc => {
//         const obj = { uid: doc.id, data: doc.data() }
//         return obj;
//       })
//     },
//     sendMessage(uid) {
//       db.collection("messages")
//         .doc(uid)
//         .set({
//           message: this.message
//         })
//       this.message = "";
//     }
//   }
// }
</script>