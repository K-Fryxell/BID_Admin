<template>
    <v-container>
        <v-btn class="ma-6" to="../regist_admin">
            管理者新規登録
        </v-btn>
        <v-btn class="ma-6" to="../regist_user">
            ユーザ新規登録
        </v-btn>
        <v-data-table
            class="mt-12"
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
        <v-dialog persistent v-model="emergency" width="600">
            <v-card>
                <v-row justify="center" class="pa-0 ma-0">
                    <v-col cols="auto">
                        <v-card-title v-slot:item.status="{ item: users }">
                            {{emergencyVitalLog.time}}に{{users.useruid}}が{{emergencyVitalLog.cause}}になったので通報しました。
                        </v-card-title>
                        <v-row justify="center" class="pa-0 ma-0">
                            <v-btn width="50" @click="emergency=false">
                                確認
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
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
            emergency:false,
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
