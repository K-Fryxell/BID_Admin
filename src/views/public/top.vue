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
<<<<<<< HEAD
  import Header from '@/components/public/Header.vue'

  export default {
      name: 'top',
      components: {
        Header
      },
      data () {
          return {
              
          }
      },
  }
</script>


<style scoped lang="css">
    /* リセット */
    body,
    div,
    h1,
    h2,
    h3,
    p,
    ul,
    li {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    .wrap {
    position: relative;
    margin: 0;
    padding: 0;
    width: 1903;
    height: 873px;
    background-color: aqua;
    background-image: url(~@/assets/top.png);
    background-size: cover;
    }
    .first {
    font-weight: bold;
    position: absolute;
    top: 235px;
    left: 140px;
    }
    .second {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 140px;
    }
    .third {
    font-weight: bold;
    position: absolute;
    top: 445px;
    left: 140px;
    }
    strong {
    font-weight:bold;
    font-size: 750%;
    position: absolute;
    top:650px;
    left: 10px;
    color: #15ff00
    }
    .unit{
    font-weight: bold;
    position: absolute;
    font-size: 450%;
    top: 705px;
    left: 240px;
    color: #15ff00
    }
    .border {
    font-weight: bold;
    height: 200px;
    width: 330px;
    position: absolute;
    padding-top: 10px;
    padding-left: 10px;
    margin-left: 1382px;
    margin-top: 258px;
    }
    .border-solid {
    border: 4px solid #000000;
    background-color: #ffffff;
    }
    .fresult {
    font-weight: bold;
    position: absolute;
    top: 290px;
    left: 130px;
    }
    .sresult {
    font-weight: bold;
    position: absolute;
    top: 393px;
    left: 130px;
    }
    .tresult {
    font-weight: bold;
    position: absolute;
    top: 498px;
    left: 130px;
    }
    span {
    text-decoration: underline;
    border-width: 5px;
    }
    h1 {
    position: absolute;
    top: 85px;
    left: 1510px;
    }
    #app {
    position: absolute;;
    }

</style>

<script>
=======
>>>>>>> develop
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
