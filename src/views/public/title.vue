<template>
    <v-main class="ma-0 pa-0" style="background:radial-gradient(#fff,#707070); height:100%">
        <v-row class="ma-0 pa-0" justify="center" @click="toTop">
            <img width="18%" src="@/assets/logo1.png" style="margin: 50vh auto 0; transform: translateY(-50%);">
        </v-row>
        <!-- 不審者発見モーダル -->
        <v-dialog v-model="crimeVitalLogModal" width="500">
            <v-card>
                <v-row class="ma-0 pa-0 pt-5" justify="center">
                    <img src="@/assets/bikkuri.png" alt="異常値検出マーク">
                </v-row>
                <v-row class="ma-0 mt-4 pa-0" justify="center">
                    <v-col lg="11">
                        <v-card-text class="text-lg-h6 subtitle-1">
                            付近で不審者が現れました。<br/>充分な警戒を行ってください。
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-row justify="end" class="pa-0 ma-0 pb-6 lg-mr-10 mr-6">
                    <v-btn width="50" @click="crimeVitalLogModal=false">
                        閉じる
                    </v-btn>
                </v-row>
            </v-card>
        </v-dialog>
    </v-main>
</template>
<script>
export default {
    components: {},
    data () {return {
        crimeVitalLogModal:false
    }},
    methods:{
        toTop(){
            this.$router.push('/top')
        }
    }
}
</script>
