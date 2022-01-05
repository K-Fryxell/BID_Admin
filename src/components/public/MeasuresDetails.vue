<template>
    <v-main>
        <Header/>
        <v-container class="ma-0 pa-0" fluid>
            <v-layout class="ma-0 mt-8 pa-0" column>
                <v-row class="ma-4 pa-0 pt-1" justify="center">
                    <v-flex class="ma-0 pa-0" lg10>
                        <v-row class="ma-4 mt-lg-0 mt-6 pa-0 pt-lg-8 pt-12">
                            <v-card-title class="headline ma-0 pa-0">
                                <strong>心房細動の</strong>
                            </v-card-title>
                        </v-row>
                        <v-row class="ma-4 mt-n4 pa-0">
                            <v-card-title class="display-1 ma-0 pa-0">
                                <strong>リスクと対策</strong>
                            </v-card-title>
                        </v-row>
                        <!-- PC画面 -->
                        <v-row class="hidden-sm-and-down ma-0 pa-0">
                            <div class="container" style="position:relative;">
                                <hr class="mt-n3" style="position:absolute; top:0px; left:0px; width:100%; border: solid 3px #888; z-index:0;">
                                <hr class="mt-n3" style="position:absolute; top:0px; left:0px; width:10%; border: solid 3px #1B813E; z-index:1;">
                                <hr class="mt-n3" style="position:absolute; top:0px; left:13%; width:6%; border: solid 3px #E83015; z-index:2">
                            </div>
                            <!-- 本来はforでlist-itemを回すが、小見出し前の縦棒の色分けが面倒なので今はやらない -->
                            <v-row class="ma-0 mt-lg-n2 mt-1 pa-0">
                                <v-col class="ma-0 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #1B813E">
                                        <v-card-title><strong>高血圧</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>高血圧は心臓に負担をかけますが、特に朝血圧の高い人は要注意です。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #E83015">
                                        <v-card-title><strong>食事</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>タンパク質、脂質、糖質（炭水化物）、ビタミン、ミネラル、食物繊維等をバランス
                                        よくとることです。飲酒も控えましょう。夜遅い食事は肥満の元です。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-lg-n6 mt-2 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #1B813E">
                                        <v-card-title><strong>肥満</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>見た目で肥満と分かる人はもちろん、外見は痩せていても内蔵のまわりに
                                            脂肪がついている内臓脂肪型肥満の人も、発症のリスクを抱えています。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-2 mt-lg-0 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 mt-lg-n3 pa-0" style="border-left: solid 5px #E83015">
                                        <v-card-title><strong>運動</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>勧められるのは有酸素運動です。これはしっかり呼吸をしながら続ける、軽いゆったり
                                        とした運動です。逆に、激しい運動は心房細動のリスクにもなるので控えましょう。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-lg-n8 mt-2 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 mt-lg-n3 pa-0" style="border-left: solid 5px #1B813E">
                                        <v-card-title><strong>糖尿病</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>糖尿病は動脈硬化を起こしやすくします。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-lg-n3 mt-2 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #E83015">
                                        <v-card-title><strong>薬</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>ジギタリス製剤、カルシウム拮抗薬、β遮断薬など</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-n8 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #1B813E">
                                        <v-card-title><strong>喫煙</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>喫煙は血管を傷つけ、血管の収縮、血液の凝固、動脈硬化をもたらします。</v-card-text>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-row>
                        <!-- スマホ画面 -->
                        <v-row class="hidden-md-and-up ma-0 pa-0">
                            <div class="container" style="position:relative;">
                                <hr class="mt-n3" style="position:absolute; top:0px; left:0px; width:100%; border: solid 3px #888; z-index:0;">
                                <hr class="mt-n3" style="position:absolute; top:0px; left:0px; width:35%; border: solid 3px #1B813E; z-index:1;">
                                <hr class="mt-n3" style="position:absolute; top:0px; left:46%; width:22%; border: solid 3px #E83015; z-index:2">
                            </div>
                            <!-- 本来はforでlist-itemを回すが、小見出し前の縦棒の色分けが面倒なので今はやらない -->
                            <v-row class="ma-0 mt-1 pa-0">
                                <v-col class="ma-0 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #1B813E">
                                        <v-card-title><strong>高血圧</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>高血圧は心臓に負担をかけますが、特に朝血圧の高い人は要注意です。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-2 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #1B813E">
                                        <v-card-title><strong>肥満</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>見た目で肥満と分かる人はもちろん、外見は痩せていても内蔵のまわりに
                                            脂肪がついている内臓脂肪型肥満の人も、発症のリスクを抱えています。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-2 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #1B813E">
                                        <v-card-title><strong>糖尿病</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>糖尿病は動脈硬化を起こしやすくします。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-2 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #1B813E">
                                        <v-card-title><strong>喫煙</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>喫煙は血管を傷つけ、血管の収縮、血液の凝固、動脈硬化をもたらします。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #E83015">
                                        <v-card-title><strong>食事</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>タンパク質、脂質、糖質（炭水化物）、ビタミン、ミネラル、食物繊維等をバランス
                                        よくとることです。飲酒も控えましょう。夜遅い食事は肥満の元です。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-2 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #E83015">
                                        <v-card-title><strong>運動</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>勧められるのは有酸素運動です。これはしっかり呼吸をしながら続ける、軽いゆったり
                                        とした運動です。逆に、激しい運動は心房細動のリスクにもなるので控えましょう。</v-card-text>
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 mt-2 pa-0" lg="6" cols="12">
                                    <v-row class="ma-0 pa-0" style="border-left: solid 5px #E83015">
                                        <v-card-title><strong>薬</strong></v-card-title>
                                    </v-row>
                                    <v-row class="ma-0 mt-n3 pa-0">
                                        <v-card-text>ジギタリス製剤、カルシウム拮抗薬、β遮断薬など</v-card-text>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-flex>
                </v-row>
            </v-layout>
        </v-container>
    </v-main>
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

