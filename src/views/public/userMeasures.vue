<template>
  <v-content>
    <Header/>
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
      <a href="/user_measuresDetail"
        ><img src="..\..\assets/right.png" alt="詳細ページへ" class="detail"
      /></a>
    </div>
  </v-content>
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
  font: inherit;
  vertical-align: baseline;
}
/* css */
.wrap {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(~@/assets/haikei.png);
  background-size: cover; /* 全画面 */
  background-position: center center; /* 縦横中央 */
}
h1 {
  text-decoration: underline;
  font-weight: 600;
  font-size: 2vw;
  margin-left: 35vw;
  margin-bottom: 2vh;
  padding-top: 20vh;
}
strong {
  color: #d12727;
}
p {
  font-size: 1vw;
  font-weight: bold;
  margin-left: 15vw;
}
.box {
  width: 58vw;
  height: 28vh;
  border: solid 3px;
  background: #fdf2f9;
  margin-left: 23vw;
  margin-top: 2vh;
  margin-bottom: 3vh;
  padding-top: 2vh;
}
a {
  text-decoration: none;
  font-size: 1.1vw;
  font-weight: bold;
}
ul {
  padding-top: 2vh;
  padding-left: 4vw;
  font-size: 1.3vw;
  line-height: 2;
}
.left {
  width: 30vw;
  float: left;
  line-height: 2;
  margin-left: 20vw;
  margin-top: 1vh;
}
.right {
  width: 30vw;
  float: right;
  line-height: 2;
  margin-top: 1vh;
  margin-right: 15vw;
}
.item {
  width: 2vw;
  margin-right: 1vw;
}
.detail {
  position: absolute;
  right: 1vw;
  top: 40vh;
  width: 2vw;
}
.back {
  position: relative;
  left: 3vw;
  top: 15vh;
  width: 6vw;
}
</style>

<script>
import Header from '@/components/public/Header.vue'

export default {
    name: 'UserMeasurs',
    components: {
      Header
    },
    data () {
        return {
            
        }
    },
}
</script>