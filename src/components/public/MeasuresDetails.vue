<template>
    <v-content>
        <Header/>
        <v-container class="ma-0 pa-0" fluid>
            <v-layout class="ma-0 mt-8 pa-0" column>
                <v-row class="ma-4 pa-0 pt-1" justify="center">
                    <v-flex class="ma-0 pa-0" lg10>
                        <v-row class="ma-4 pa-0 pt-12">
                            <v-title class="title ma-0 pa-0">
                                心房細動の
                            </v-title>
                        </v-row>
                        <v-row class="ma-4 ma-0 pa-0">
                            <v-title class="display-1 ma-0 pa-0" style="">
                                <strong style="color:red;">リスクと対策</strong>
                            </v-title>
                        </v-row>
                        <!-- 本来はforでlist-itemを回すが、小見出し前の縦棒の色分けが面倒なので今はやらない -->
                        <v-row class="ma-0 mt-6 pa-0">
                            <v-col class="ma-0 pa-0 ml-6 pr-12 red" lg="5">
                                <v-row class="ma-0 pa-0">
                                    <v-title>高血圧</v-title>
                                </v-row>
                                <v-row class="ma-0 mt-2 pa-0">
                                    <v-text>高血圧は心臓に負担をかけますが、特に朝血圧の高い人は要注意です。</v-text>
                                </v-row>
                            </v-col>
                            <v-col class="ma-0 pa-0 ml-12 blue" lg="5">
                                <v-row class="ma-0 pa-0">
                                    <v-title>肥満</v-title>
                                </v-row>
                                <v-row class="ma-0 mt-2 pa-0">
                                    <v-text>見た目で肥満と分かる人はもちろん、外見は痩せていても内蔵のまわりに
                                        脂肪がついている内臓脂肪型肥満の人も、発症のリスクを抱えています。</v-text>
                                </v-row>
                            </v-col>
                            <v-col class="ma-0 mt-5 pa-0 ml-6 pr-12 red" lg="5">
                                <v-row class="ma-0 pa-0">
                                    <v-title>糖尿病</v-title>
                                </v-row>
                                <v-row class="ma-0 mt-2 pa-0">
                                    <v-text>糖尿病は動脈硬化を起こしやすくします。</v-text>
                                </v-row>
                            </v-col>
                            <v-col class="ma-0 mt-5 pa-0 ml-12 blue" lg="5">
                                <v-row class="ma-0 pa-0">
                                    <v-title>喫煙</v-title>
                                </v-row>
                                <v-row class="ma-0 mt-2 pa-0">
                                    <v-text>喫煙は血管を傷つけ、血管の収縮、血液の凝固、動脈硬化をもたらします。</v-text>
                                </v-row>
                            </v-col>
                            <v-col class="ma-0 mt-5 pa-0 ml-6 pr-12 red" lg="5">
                                <v-row class="ma-0 pa-0">
                                    <v-title>食事</v-title>
                                </v-row>
                                <v-row class="ma-0 mt-2 pa-0">
                                    <v-text>タンパク質、脂質、糖質（炭水化物）、ビタミン、ミネラル、食物繊維等をバランス
                                    よくとることです。飲酒も控えましょう。夜遅い食事は肥満の元です。</v-text>
                                </v-row>
                            </v-col>
                            <v-col class="ma-0 mt-5 pa-0 ml-12 blue" lg="5">
                                <v-row class="ma-0 pa-0">
                                    <v-title>運動</v-title>
                                </v-row>
                                <v-row class="ma-0 mt-2 pa-0">
                                    <v-text>勧められるのは有酸素運動です。これはしっかり呼吸をしながら続ける、軽いゆったり
                                    とした運動です。逆に、激しい運動は心房細動のリスクにもなるので控えましょう。</v-text>
                                </v-row>
                            </v-col>
                            <v-col class="ma-0 mt-5 pa-0 ml-6 pr-12 red" lg="5">
                                <v-row class="ma-0 pa-0">
                                    <v-title>薬</v-title>
                                </v-row>
                                <v-row class="ma-0 mt-2 pa-0">
                                    <v-text>ジギタリス製剤、カルシウム拮抗薬、β遮断薬など</v-text>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-row>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
  export default {
      name: 'userMeasuresDetail',
      data () {
          return {
              
          }
      },
  }
</script>

