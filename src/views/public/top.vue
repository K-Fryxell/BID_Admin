<template>
    <v-main class="ma-0 pa-0" style="background:radial-gradient(#fff,#c5c5c5); height:100%">
        <v-container class="ma-0 pa-0" elevation="0" fluid style="height:100%">
            <!-- pcヘッダー -->
            <v-navigation-drawer class="ma-0 pa-0 hidden-sm-and-down" fixed height style="width:100%;" permanent>
                <Header/>
            </v-navigation-drawer>
            <!-- 携帯ヘッダー -->
            <v-navigation-drawer class="ma-0 pa-0 hidden-md-and-up" fixed height style="width:100%;" permanent>
                <Header/>
            </v-navigation-drawer> 

            <!-- PCレイアウト -->
            <v-layout class="ma-0 pa-0 hidden-sm-and-down" style="height:100%">
                <!-- バイタル表示領域 -->
                <v-flex class="mb-6" lg4>
                    <!-- 下ぞろえの箱 -->
                    <div class="parent">
                        <!-- 縦積み配置 -->
                        <v-layout class="ma-0 pa-0" column>
                            <!-- 下ぞろえの中身 -->
                            <div>
                                <v-row class="ma-0 pa-0" justify="center">
                                    <v-card class="ma-0 pa-0" elevation="0" style="width:100%" color="transparent">
                                        <v-row class="ma-0 pa-0" justify="center">
                                            <v-col class="ma-0 pa-0" cols="3" style="background-color:#fff; border-style: solid;border-color: #707070 #707070 #707070 #707070;border-width: 3px 0px 3px 3px;">
                                                <v-card-text class="text-lg-h6 text-center">
                                                    心拍数(bpm)
                                                </v-card-text>
                                            </v-col>
                                            <v-col class="ma-0 pa-0" cols="3" style="background-color:#fff; border-style: solid;border-color: #707070 #707070 #707070 #707070;border-width: 3px 3px 3px 0px;">
                                                <v-card-text class="mt-4 text-lg-h5 text-center">
                                                    <span style="color:#11FF00">{{heartRate}}</span>
                                                </v-card-text>
                                            </v-col>
                                        </v-row>
                                        
                                    </v-card>
                                </v-row>
                                <v-row class="ma-0 mt-5 pa-0" justify="center">
                                    <v-card class="ma-0 pa-0" elevation="0" style="width:100%" color="transparent">
                                        <v-row class="ma-0 pa-0" justify="center">
                                            <v-col class="ma-0 pa-0" cols="3" style="background-color:#fff; border-style: solid;border-color: #707070 #707070 #707070 #707070;border-width: 3px 0px 3px 3px;">
                                                <v-card-text class="text-lg-h6 text-center">
                                                    体温<br/>(℃)
                                                </v-card-text>
                                            </v-col>
                                            <v-col class="ma-0 pa-0 " cols="3" style="background-color:#fff; border-style: solid;border-color: #707070 #707070 #707070 #707070;border-width: 3px 3px 3px 0px;">
                                                <v-card-text class="mt-4 text-lg-h5 text-center">
                                                    <span style="color:#11FF00">{{bodyTemperature}}</span>
                                                </v-card-text>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-row>
                                <v-row class="ma-0 mt-5 pa-0" justify="center">
                                    <v-card class="ma-0 pa-0" elevation="0" style="width:100%;" color="transparent">
                                        <v-row class="ma-0 pa-0" justify="center">
                                            <v-col class="ma-0 pa-0 " cols="3" style="background-color:#fff; border-style: solid;border-color: #707070 #707070 #707070 #707070;border-width: 3px 0px 3px 3px;">
                                                <v-card-text class="text-lg-h6 text-center">
                                                    血圧(mmHg)
                                                </v-card-text>
                                            </v-col>
                                            <v-col class="ma-0 pa-0 " cols="3" style="background-color:#fff; border-style: solid;border-color: #707070 #707070 #707070 #707070;border-width: 3px 3px 3px 0px;">
                                                <v-card-text class="mt-4 text-lg-h5 text-center">
                                                    <span style="color:#ff4500">{{bloodPressureMax}}</span>/<span style="color:#0000ff">{{bloodPressureMin}}</span>
                                                </v-card-text>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-row>
                            </div>
                        </v-layout>
                    </div>
                </v-flex>

                <!-- 人オブジェクト -->
                <v-flex class="pt-12" lg4>
                    <!-- 異常値検出時ここの画像を変える -->
                    <v-row v-if="flg==0" color="transparent" class="ma-0 mt-12 pt-12 pa-0" justify="center">
                        <img width="500px" src="@/assets/people.png">
                    </v-row>
                    <v-row v-if="flg==1" color="transparent" class="ma-0 mt-12 pt-12 pa-0" justify="center">
                        <img width="500px" src="@/assets/people3.png" @click="modal">
                    </v-row>
                </v-flex>

                <!-- メッセージ表示領域 -->
                <v-flex class="ma-0 mt-12 pa-0" lg4>
                    <v-row class="ma-0 mt-12 pa-0" justify="center">
                        <v-col lg="6" class="ma-0 mt-6 pa-3" style="background-color:#fff; border-style: solid;border-color: #707070 #707070 #707070 #707070;border-width:3px;">
                            <v-card-text class="ma-0 pa-0 subtitle-1">
                                最近血圧が高いようです。<br/>一週間に2回は魚を食べましょう。
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
            <!-- pcモーダル -->
            <v-dialog class="hidden-sm-and-down" v-model="vitalLogModal" width="500">
                <v-card>
                    <v-row class="ma-0 pa-0 pt-5" justify="center">
                        <img src="@/assets/bikkuri.png" alt="異常値検出マーク">
                    </v-row>
                    <v-row class="ma-0 mt-4 pa-0" justify="center">
                        <v-col lg="11">
                            <v-card-text class="text-lg-h6 subtitle-1">
                                心拍数が高いです。<br/>
                                カフェインの摂りすぎ、喫煙は控えましょう。<br/><br/>
                                この状態が続く場合や眩暈などの症状がある場合、心房細動の可能性があるので早めの受診を推奨します。
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row justify="end" class="pa-0 ma-0 pb-6 lg-mr-10 mr-6">
                        <v-btn width="50" to="user_measures">
                            詳細へ
                        </v-btn>
                    </v-row>
                </v-card>
            </v-dialog>

            <!-- スマホレイアウト -->
            <v-layout class="ma-0 pa-0 hidden-md-and-up" style="height:100%" column>
                <!-- バイタル表示領域 -->
                <v-row class="ma-0 mt-12 pa-0" justify="center">
                    <v-col class="mt-12" cols="11">
                        <v-card style="background-color:#fff; border-style: solid;border-color:#707070;border-width:3px;">
                            <v-row class="ma-0 pa-0" justify="center">
                                <v-card-title class="subtitle-1">今日の記録</v-card-title>
                            </v-row>
                            <v-row class="ma-0 pa-0" justify="center">
                                <v-col class="ma-0 pa-0" cols="4">
                                    <v-card-text class="ma-0 pa-0 text-center">心拍数(bpm)</v-card-text>
                                    <v-card-text class="ma-0 pa-0 text-center">
                                        <span style="color:#11FF00">{{heartRate}}</span>
                                    </v-card-text>
                                </v-col>
                                <v-col class="ma-0 pa-0" cols="4">
                                    <v-card-text class="ma-0 pa-0 text-center">体温(℃)</v-card-text>
                                    <v-card-text class="ma-0 pa-0 text-center">
                                        <span style="color:#11FF00">{{bodyTemperature}}</span>
                                    </v-card-text>
                                </v-col>
                                <v-col class="ma-0 pa-0" cols="4">
                                    <v-card-text class="ma-0 pa-0 text-center">血圧(mmHg)</v-card-text>
                                    <v-card-text class="ma-0 pa-0 text-center">
                                        <span style="color:#ff4500">{{bloodPressureMax}}</span>/<span style="color:#0000ff">{{bloodPressureMin}}</span>
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                <!-- 人オブジェクト -->
                <v-row class="ma-0 pa-0" justify="center">
                     <!-- 異常値検出時ここの画像を変える -->
                    <v-row v-if="flg==0" color="transparent" class="ma-0 pt-6 pa-0" justify="center">
                        <img width="300px" src="@/assets/people.png">
                    </v-row>
                    <v-row v-if="flg==1" color="transparent" class="ma-0 mt-12 pt-12 pa-0" justify="center">
                        <img width="300px" src="@/assets/people3.png" @click="modal">
                    </v-row>
                </v-row>
                <!-- メッセージ表示領域 -->
                <v-row class="ma-0 mt-12 pa-0" justify="center">
                    <v-card-text class="ma-0 mb-10 pa-0 body-1 text-center">
                        最近血圧が高いようです。<br/>一週間に2回は魚を食べましょう。
                    </v-card-text>
                </v-row>
            </v-layout>

            


        </v-container>
    </v-main>
</template>
<style scoped>
.parent {
        height: 100%;
        width: 100%;
        /* フレックスコンテナであることを指定 */
        display: flex;
        /* 軸の設定(既定値がrowなので省略可能) */
        flex-direction: row;
        /* 交差軸：上下の配置 */
        align-items: flex-end;
      }
</style>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase, ref, child, get } from "firebase/database"
import Header from '@/components/public/Header.vue'

export default {
    name: 'top',
    components: {
        Header
    },
    data () {
        return {
            bodyTemperature: Number,
            heartRate: Number,
            bloodPressureMax: Number,
            bloodPressureMin: Number,
            flg: 0,
            vitalLogModal: false
        }
    },
    methods: {
        modal(){
            this.vitalLogModal = true
        },
        getUsersDB(){
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    const dbRef = ref(getDatabase())

                    // 基礎バイタルログ取得
                    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val())
                        this.bodyTemperature = snapshot.val().body_temperature
                        this.heartRate = snapshot.val().heart_rate
                        this.bloodPressureMax = snapshot.val().blood_pressure_max
                        this.bloodPressureMin = snapshot.val().blood_pressure_min
                    }
                    else {
                        console.log("No data available")
                    }
                    }).catch((error) => {
                        console.error(error)
                    })

                    // バイタルログ取得
                    get(child(dbRef, `users/${user.uid}/vitalLog`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val())
                        this.flg = snapshot.val().flg
                    }
                    else {
                        console.log("No data available")
                    }
                    }).catch((error) => {
                        console.error(error)
                    })
                }
            })
        }
    },
    async created(){
        // this.getUsersDB()
        this.bodyTemperature = this.getUsersDB(),
        this.heartRate  = this.getUsersDB(),
        this.bloodPressureMax  = this.getUsersDB(),
        this.bloodPressureMin  = this.getUsersDB()
    },
    watch:{
        //  flg:function(){
        //     if(this.flg == 1){
        //         this.vitalLogModal = true
        //     }
        //     else{
        //         this.vitalLogModal = false
        //     }
        //  }
    },
    mounted(){
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                const dbRef = ref(getDatabase())
                // バイタルログ取得
                get(child(dbRef, `users/${user.uid}/vitalLog`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val())
                    this.flg = snapshot.val().flg
                }
                else {
                    console.log("No data available")
                }
                }).catch((error) => {
                    console.error(error)
                })
            }
        })
    }
}
</script>
