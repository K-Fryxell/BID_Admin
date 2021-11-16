<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="10"
        >
            <template v-slot:item.status="{ item }">
                <div :class="item.color" style="margin:0; padding:0;">
                    {{item.status}}
                </div>
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
        headers: [
        {
            text: 'ユーザ名',
            align: 'start',
            sortable: false,
            value: 'name',
        },
        { text: '体温(℃)', value: 'bodyTemperature'},
        { text: '心拍数(bpm)', value: 'heartRate' },
        { text: '血圧(mmHg)', value: 'bloodPressure'},
        { text: '最低血圧(mmHg)', value: 'minimumBloodPressure'},
        { text: 'ステータス', value: 'status' },
        { text: '詳細', value: 'actions' },
        ],
        desserts: [
        {
            name: 'ユーザ１',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115.0,
            minimumBloodPressure:75.0,
            status: '正常',
            color:'',
        },
        {
            name: 'ユーザ２',
            bodyTemperature:36.3,
            heartRate:69,
            bloodPressure:115.3,
            minimumBloodPressure:74.2,
            status: '正常',
            color:'',
        },
        {
            name: 'ユーザ３',
            bodyTemperature:39.8,
            heartRate:64,
            bloodPressure:113.2,
            minimumBloodPressure:77.1,
            status: '異常',
            color:'red--text',
        },
        {
            name: 'ユーザ４',
            bodyTemperature:35.7,
            heartRate:70,
            bloodPressure:116.1,
            minimumBloodPressure:78.5,
            status: '正常',
            color:'',
        },
        {
            name: 'ユーザ５',
            bodyTemperature:36.1,
            heartRate:62,
            bloodPressure:115.9,
            minimumBloodPressure:76.4,
            status: '正常',
            color:'',
        },
        {
            name: 'ユーザ６',
            bodyTemperature:37.0,
            heartRate:68,
            bloodPressure:117.1,
            minimumBloodPressure:79.2,
            status: '正常',
            color:'',
        },
        {
            name: 'ユーザ７',
            bodyTemperature:36.9,
            heartRate:130,
            bloodPressure:112.0,
            minimumBloodPressure:71.0,
            status: '異常',
            color:'red--text',
        },
        {
            name: 'ユーザ８',
            bodyTemperature:36.3,
            heartRate:65,
            bloodPressure:112.9,
            minimumBloodPressure:73.2,
            status: '正常',
            color:'',
        },
        {
            name: 'ユーザ９',
            bodyTemperature:36.7,
            heartRate:66,
            bloodPressure:116.7,
            minimumBloodPressure:76.3,
            status: '正常',
            color:'',
        },
        {
            name: 'ユーザ１０',
            bodyTemperature:36.3,
            heartRate:73,
            bloodPressure:109.0,
            minimumBloodPressure:75.7,
            status: '正常',
            color:'',
        },
        ],
    }
},
}
</script>
