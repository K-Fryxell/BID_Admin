<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="users"
            :items-per-page="10"
        >
            <template v-slot:item.status="{ item: users }">
                <tbody class="custom-body">
                    <tr v-for="(user,index) in users" :key="index" :index="index" class="custom-tr">
                        <td>{{ user.name }}</td>
                        <td>{{ user.bodyTemperature }}</td>
                        <td>{{ user.heartRate }}</td>
                        <td>{{ user.bloodPressure }}</td>
                        <td>{{ user.minimumBloodPressure }}</td>
                        <td>{{ user.status }}</td>
                    </tr>
                </tbody>
            </template>
            <template #item.actions="{ item }">
                <v-btn @click="onClickShow(item)" to="/user_details">表示</v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"

export default {
    name: 'Home',
    components: {
    
    },
    data () {
        return {
            users: [],
            box:[],
            headers: [
                { text: 'ユーザ名', value: 'n', align: 'start', sortable: false},
                { text: '体温(℃)', value: 'bodyTemperature'},
                { text: '心拍数(bpm)', value: 'heartRate' },
                { text: '血圧(mmHg)', value: 'bloodPressure'},
                { text: '最低血圧(mmHg)', value: 'minimumBloodPressure'},
                { text: 'ステータス', value: 's' },
                { text: '詳細', value: 'actions' },
            ],
        }
    },
    methods: {
        getUsers() {
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    const db = getFirestore()
                    const docRef = doc(db, "users", user.uid, "bid", user.uid)
                    const docSnap = getDoc(docRef)
                    console.log(docSnap)


                    this.$store.commit("onAuthStateChanged", user.uid)
                    if (user.uid) {
                        //データベース参照用uid
                        console.log(this.$store.getters.user)
                        //セッション確認用フラグ
                        console.log(this.$store.getters.isLoggedIn)
                    } else {
                        console.log("ユーザ情報取得に失敗")
                    }
                }
            })
        }
    },
    created:function(){
        this.getUsers()
    }
}
</script>
