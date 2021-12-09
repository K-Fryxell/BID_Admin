<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="10"
        >
        </v-data-table>
    </v-container>
</template>

<script>
// import firebase from 'firebase'

export default {
    name: 'Home',
    components: {
    
    },
    data () {
        return {
            headers: [
                {
                    text: 'ユーザID',
                    align: 'start',
                    sortable: false,
                    value: 'user_id',
                },
                { text: 'BID_ID', value: 'bid_id' },
                { text: '氏名', value: 'name' },
                { text: 'email', value: 'email'},
                { text: '電話番号', value: 'tel' },
                // ステータス（正常・異常・通報済）
                { text: 'ステータス', value: 'status' },
            ],
            items: [
                {
                    user_id:"user_id",
                    bid_id:"bid_id",
                    name: "name",
                    email:"email",
                    tel:"tel",
                    status:"status"
                },
            ]
            
        }
    
    },
    computed:{
        
    },
}
</script>