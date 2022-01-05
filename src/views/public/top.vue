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
import Header from '@/components/public/Header.vue'

export default {
    name: 'top',
    components: {
    Header
    },
    data () {
        return {
            card_height: Number,
            card_width: Number,
            img_width: 360
        }
    },
    methods: {
        onResize(){
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
    },
    watch:{
            x:function(){
                if(this.x<360)
                {
                    this.card_height = 0,
                    this.card_width = 0,
                    this.img_width = 100
                }
                else
                {
                    this.card_height = 0,
                    this.card_width = 0,
                    this.img_width = 100
                }
            }
        },
}
</script>
