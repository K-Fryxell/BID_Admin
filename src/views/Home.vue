<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
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
          { text: '体温', value: 'bodyTemperature'},
          { text: '心拍', value: 'heartRate' },
          { text: '血圧', value: 'bloodPressure'},
          { text: '最低血圧', value: 'minimumBloodPressure'},
          { text: 'ステータス', value: 'status' },
        ],
        desserts: [
          {
            name: 'ユーザ１',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115.0,
            minimumBloodPressure:75.0,
            status: '正常',
          },
          {
            name: 'ユーザ２',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115.3,
            minimumBloodPressure:75.0,
            status: '正常',
          },
          {
            name: 'ユーザ３',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115.0,
            minimumBloodPressure:75.0,
            status: '正常',
          },
          {
            name: 'ユーザ４',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115.3,
            minimumBloodPressure:75.0,
            status: '正常',
          },
          {
            name: 'ユーザ５',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115.9,
            minimumBloodPressure:75.0,
            status: '正常',
          },
          {
            name: 'ユーザ６',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115.0,
            minimumBloodPressure:75.0,
            status: '正常',
          },
          {
            name: 'ユーザ７',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115,
            minimumBloodPressure:75.0,
            status: '正常',
          },
          {
            name: 'ユーザ８',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115.5,
            minimumBloodPressure:75.0,
            status: '正常',
          },
          {
            name: 'ユーザ９',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115.9,
            minimumBloodPressure:75.0,
            status: '正常',
          },
          {
            name: 'ユーザ１０',
            bodyTemperature:36.5,
            heartRate:65,
            bloodPressure:115,
            minimumBloodPressure:75.0,
            status: '正常',
          },
        ],
      }
  }
  }
</script>
