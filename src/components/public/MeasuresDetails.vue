<template>
    <v-content>
        <Header/>
        <v-container class="ma-0 pa-0" fluid>
            <v-layout class="ma-0 mt-8 pa-0" column>
                <v-row class="ma-4 mt-12 pa-0 pt-1" justify="center">
                    <v-flex class="ma-0 pa-0" lg6>
                        <v-row class="ma-4 mt-12 pa-0 pt-12">
                            <v-title class="display-1 mt-12 pt-12" style="text-decoration:underline; text-decoration-color:#808080;">
                                <strong class="display-2" style="color:red;">リスクと対策</strong>
                            </v-title>
                        </v-row>
                        <!-- 症状例 -->
                        <v-row class="ma-0 pa-0">
                            <v-title class="headline"><strong>以下の症状が続く場合、病院で受診してください。</strong></v-title>
                        </v-row>
                       
                    </v-flex>
                </v-row>
            </v-layout>
        </v-container>
        <div class="wrap">
        

        <div class="left">
            <div class="risk">
            <h2 class="left_line_risk">高血圧</h2>
            <p>
                高血圧は心臓に負担をかけますが、特に朝血圧の高い人は要注意です。
            </p>
            </div>
            <div class="risk">
            <h2 class="left_line_risk">肥満</h2>
            <p>
                見た目で肥満と分かる人はもちろん、外見は痩せていても内蔵のまわりに
                脂肪がついている内臓脂肪型肥満の人も、発症のリスクを抱えています。
            </p>
            </div>
            <div class="risk">
            <h2 class="left_line_risk">糖尿病</h2>
            <p>糖尿病は動脈硬化を起こしやすくします。</p>
            </div>
            <div class="risk">
            <h2 class="left_line_risk">喫煙</h2>
            <p>
                喫煙は血管を傷つけ、血管の収縮、血液の凝固、動脈硬化をもたらします。
            </p>
            </div>
        </div>
        <div class="right">
            <div class="measures">
            <h2 class="left_line_measures">食事</h2>
            <p>
                タンパク質、脂質、糖質（炭水化物）、ビタミン、ミネラル、食物繊維等をバランス
                よくとることです。飲酒も控えましょう。夜遅い食事は肥満の元です。
            </p>
            </div>
            <div class="measures">
            <h2 class="left_line_measures">運動</h2>
            <p>
                勧められるのは有酸素運動です。これはしっかり呼吸をしながら続ける、軽いゆったり
                とした運動です。逆に、激しい運動は心房細動のリスクにもなるので控えましょう。
            </p>
            </div>
            <div class="measures">
            <h2 class="left_line_measures">薬</h2>
            <p>ジギタリス製剤、カルシウム拮抗薬、β遮断薬など</p>
            </div>
        </div>
        </div>
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

