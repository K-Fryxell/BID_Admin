<template>
  <v-container>
    <div class="wrap">
      <h1>心房細動の<br /><strong>リスクと対策</strong></h1>

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
            見た目で肥満問分かる人はもちろん、外見は痩せていても内蔵のまわりに<br />
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
            タンパク質、脂質、糖質（炭水化物）、ビタミン、ミネラル、食物繊維等をバランス<br />
            よくとることです。飲酒も控えましょう。夜遅い食事は肥満の元です。
          </p>
        </div>
        <div class="measures">
          <h2 class="left_line_measures">運動</h2>
          <p>
            勧められるのは有酸素運動です。これはしっかり呼吸をしながら続ける、軽いゆったり<br />
            とした運動です。逆に、激しい運動は心房細動のリスクにもなるので控えましょう。
          </p>
        </div>
        <div class="measures">
          <h2 class="left_line_measures">薬</h2>
          <p>ジギタリス製剤、カルシウム拮抗薬、β遮断薬など</p>
        </div>
      </div>
      <a href="#">
        <img src="..\..\assets/back.png" alt="戻るボタン" class="back"
      /></a>
      <a href="/user_measures"
        ><img src="..\..\assets/left.png" alt="対策ページへ" class="detail"
      /></a>
    </div>
  </v-container>
</template>
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
h1 {
  line-height: 1;
  margin-left: 90px;

  font-size: 29px;
  margin-top: 20px;
}
h2 {
  font-size: 22px;
  font-weight: bold;
}
p {
  font-weight: bold;
}
.wrap {
  margin: 0;
  padding: 0;
  padding-top: 120px;
  /* width: 1500px;
  height: 800px; */
  width: 100vw;
  height: 100vh;
  background-image: url(~@/assets/haikei.png);
  background-size: cover; /* 全画面 */
  background-position: center center; /* 縦横中央 */
}
.left {
  width: 630px;
  float: left;
  line-height: 2;
  margin-left: 100px;
  margin-top: 25px;
}
.risk {
  margin-bottom: 12px;
  height: 105px;
}
.left_line_risk {
  border-left: thick solid #5ea99b;
  height: 35px;
  margin-bottom: 10px;
  padding-left: 10px;
}
.right {
  width: 630px;
  float: right;
  line-height: 2;
  margin-top: 25px;
  margin-right: 130px;
}
.left_line_measures {
  border-left: thick solid #dc8673;
  height: 35px;
  margin-bottom: 10px;
  padding-left: 10px;
}
.measures {
  margin-bottom: 15px;
  height: 105px;
}
.back {
  position: absolute;
  left: 50px;
  top: 750px;
  width: 80px;
}
.detail {
  position: absolute;
  left: 18px;
  top: 370px;
  width: 30px;
}
</style>
