<template>
  <v-container>
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
    <a href="#">青梅市立総合病院</a>
    <a href="#">東京都立多摩総合医療センター</a>
    <br />
    <br />
    <a href="#">日本医科大学付属病院</a>
    <a href="#">綾瀬循環器病院</a>
  </v-container>
</template>

<style scoped lang="css">
template {
  margin: 0;
  padding: 0;
  /* background-image: url(~@/assets/haikei.png); */
  /* background: url("~assets/haikei.png"); */
  background-size: cover;
}
h1 {
  text-decoration: underline;
}
strong {
  color: #d12727;
}
.box {
  border: solid 3px;
  background: #fdf2f9;
}
</style>
