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
    mounted () {
        // this.getUsers()
        // firebase.firestore().collection("users").doc().collection('bid').onSnapshot(() => {
        //     this.getUsers()
        // })
    },
    methods: {
        // getUsers(){
        //     firebase.firestore().collection("users").doc().collection('bid').get().then(async snapshot => {
        //         await snapshot.forEach(doc => {
        //             //contentは要素
        //             //pushは配列データそのもの
        //             // this.allData.push(doc.data().content)
        //             this.box.push({
        //                 name:doc.data().name,
        //                 bodyTemperature:doc.data().bodyTemperature,
        //                 heartRate:doc.data().heartRate,
        //                 bloodPressure:doc.data().bloodPressure,
        //                 minimumBloodPressure:doc.data().minimumBloodPressure,
        //                 status:doc.data().status
        //             })
        //         })
        //         this.users = this.box
        //         this.box = []
        //     })
        // },
        // onAuth(){
        //     this.$store.commit('')
        // }
    },
    // created:function(){
    //     this.onAuth()
    // }
}
</script>