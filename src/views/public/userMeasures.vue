<template>
  <v-container>
    <div class="wrap">
      <h1><strong>心房細動</strong>の可能性があります</h1>
      <p>以下の書状が続く場合、病院で診察をしてください。</p>
      <div class="box">
        <ul>
          <li>動機</li>
          <li>胸の痛み</li>
          <li>息切れ</li>
          <li>めまい</li>
        </ul>
      </div>

      <p>推奨病院</p>
      <div class="left">
        <img src="..\..\assets/item.png" alt="項目" class="item" /><a
          href="https://www.mghp.ome.tokyo.jp/"
          >青梅市立総合病院</a
        >
        <br />
        <img src="..\..\assets/item.png" alt="項目" class="item" /><a href="#"
          >日本医科大学付属病院</a
        >
      </div>
      <div class="right">
        <img src="..\..\assets/item.png" alt="項目" class="item" /><a href="#"
          >東京都立多摩総合医療センター</a
        >
        <br />
        <img src="..\..\assets/item.png" alt="項目" class="item" /><a href="#"
          >綾瀬循環器病院</a
        >
      </div>
      <a href="#">
        <img src="..\..\assets/back.png" alt="戻るボタン" class="back"
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
/* css */
.wrap {
  margin: 0;
  padding: 0;
  padding-top: 130px;
  width: 1485px;
  height: 800px;
  background-image: url(~@/assets/haikei.png);
  background-size: cover;
}
h1 {
  text-decoration: underline;
  font-weight: 600;
  font-size: 35px;
  margin-left: 510px;
  margin-bottom: 40px;
}
strong {
  color: #d12727;
}
p {
  font-weight: bold;
  margin-left: 200px;
}
.box {
  width: 800px;
  height: 200px;
  border: solid 3px;
  background: #fdf2f9;
  margin-left: 350px;
  margin-top: 20px;
  margin-bottom: 60px;
  padding-top: 12px;
}
a {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
}
ul {
  margin-left: 30px;
  font-size: 20px;
  line-height: 2;
}
.left {
  width: 400px;
  float: left;
  line-height: 2;
  margin-left: 280px;
  margin-top: 15px;
}
.right {
  width: 400px;
  float: right;
  line-height: 2;
  margin-top: 15px;
  margin-right: 240px;
}
.item {
  width: 22px;
  margin-right: 5px;
}
.back {
  position: absolute;
  left: 50px;
  top: 720px;
  width: 80px;
}
</style>
