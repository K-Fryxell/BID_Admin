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
            <v-layout class="ma-0 pa-0" style="height:100%">
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
                <v-flex class="blue pt-12" lg4>
                    <v-row class="ma-0 mt-12 pt-12 pa-0" justify="center" style="background-color: #E5ECE6">
                        <!-- 異常値検出時ここの画像を変える -->
                        <img width="500px" src="@/assets/human.png">
                    </v-row>
                </v-flex>

                <!-- メッセージ表示領域 -->
                <v-flex class="green" lg4>
                    start 、 center 、 end 、 space-between 、 space-around および stretch
                </v-flex>
            </v-layout>

            <!-- モーダル -->
            <v-dialog v-model="vitalLogModal" width="500">
                <v-card>
                    <v-row class="ma-0 pa-0 pt-5" justify="center">
                        <img src="@/assets/bikkuri.png" alt="異常値検出マーク">
                    </v-row>
                    <v-row class="ma-0 mt-4 pa-0" justify="center">
                        <v-col lg="11">
                            <v-card-text class="title">
                                心拍数が高いです。<br/>
                                カフェインの摂りすぎ、喫煙は控えましょう。<br/><br/>
                                この状態が続く場合や眩暈などの症状がある場合、心房細動の可能性があるので早めの受診を推奨します。
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row justify="end" class="pa-0 ma-0 pb-6 mr-10">
                        <v-btn width="50" to="user_measures">
                            詳細へ
                        </v-btn>
                    </v-row>
                </v-card>
            </v-dialog>
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
    created:function(){
        this.getUsersDB()
    },
    watch:{
         flg:function(){
            if(this.flg == 1){
                this.vitalLogModal = true
            }
            else{
                this.vitalLogModal = false
            }
         }
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
