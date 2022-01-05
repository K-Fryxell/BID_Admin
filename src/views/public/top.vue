<template>
    <content>
        <Header/>
        <v-container class="ma-0 pa-0" elevation="0" fluid style="background-color: #E5ECE6">
            <v-layout class="ma-0 pa-0" column>
            <!-- pcサイズ -->
                <v-row class="ma-0 mb-10 pa-0 hidden-sm-and-down" justify="center">
                    <v-card class="ma-0 pa-0" elevation="0" style="background-color: #E5ECE6">
                        <v-row class="ma-0 pa-0 px-8">
                            <v-col class="ma-0 px-12 pa-0">
                                <v-card class="ma-0 pa-0" justify="center" elevation="0" v-resize='onResize' :height='card_height' :width='card_width'>
                                    <v-row class="ma-0 pa-0" justify="center" style="background-color: #E5ECE6">
                                        <img v-resize='onResize' :width='img_width' src="../../assets/human.png">
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
    </content>
</template>

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
            bloodPressure: Number,
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
                        this.bloodPressure = snapshot.val().blood_pressure
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
