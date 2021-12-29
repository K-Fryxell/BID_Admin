<template>
    <v-content>
        <Header/>
        <div class="wrap">
            <strong>36.7{{temperature}}</strong>
            <div class="border border-solid">最近血圧が高いようです。1週間に2回は魚を食べましょう。緊急性がある場合は、「すぐ病院へ」。</div>
            <p class="first">
            血圧
            </p>
            <p class="second">
            意識レベル
            </p>
            <p class="third">
            体温
            </p>
            <p class="unit">
            ℃
            </p>
            <p class="fresult">144/96 - <span>3日前</span>
            </p>
            <p class="sresult">Ⅲ-2 - <span>3日前</span>
            </p>
            <p class="tresult">38.6℃ - <span>5日前</span> 
            </p>
            <h1>
                <a href="#">メールアドレス・パスワードの変更はこちら</a>
            </h1>

<!-- <div id="app">
    <v-app id="inspire">
    <div>
        <v-dialog
        v-model="dialog"
        width="500">
            <template v-slot:activator="{ on, attrs }">
                <div class="box">
                    <v-btn
                    color="Black"
                    White
                    v-bind="attrs"
                    v-on="on">
                    メッセージ
                    </v-btn>
                </div>
            </template>
            <v-card>
                <v-card-text>
                    <br>
                    最近血圧が高いようです。1週間に2回は魚を食べましょう。緊急性がある場合は、「すぐ病院へ」。
                </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                    >
                    了解
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    </v-app>
</div> -->>
        </div>

        
    </v-content>
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
    width: 1903px;
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

