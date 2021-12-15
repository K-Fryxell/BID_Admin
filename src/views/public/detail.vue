<template>
    <v-container>
        <div class="wrap">
            <strong>36.7{{temperature}}</strong>
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

            <div class="details">

            <p class="d1">
            37.3
            </p>
            <p class="d2">
            37.5
            </p>
            <p class="d3">
            37.9
            </p>
            <p class="d4">
            36.7
            </p>
            <p class="d5">
            36.5
            </p>
            <p class="d6">
            36.9
            </p>
            <p class="d7">
            37.0
            </p>
            <p class="d8">
            36.8
            </p>
            <p class="d9">
            36.9
            </p>
            <p class="d10">
            36.8
            </p>
            <p class="d11">
            36.7
            </p>
            <p class="d12">
            36.9
            </p>
            <p class="d13">
            36.8
            </p>

            <p class="b1">
            144/<br>
            96
            </p>
            <p class="b2">
            139/<br>
            93
            </p>
            <p class="b3">
            140/<br>
            95
            </p>
            <p class="b4">
            125/<br>
            83
            </p>
            <p class="b5">
            125/<br>
            83
            </p>
            <p class="b6">
            120/<br>
            80
            </p>
            <p class="b7">
            117/<br>
            78
            </p>
            <p class="b8">
            119/<br>
            80
            </p>
            <p class="b9">
            120/<br>
            82
            </p>
            <p class="b10">
            121/<br>
            85
            </p>
            <p class="b11">
            118/<br>
            79
            </p>
            <p class="b12">
            120/<br>
            80
            </p>
            <p class="b13">
            119/<br>
            75
            </p>

            <p class="hr1">
            92
            </p>
            <p class="hr2">
            92
            </p>
            <p class="hr3">
            94
            </p>
            <p class="hr4">
            88
            </p>
            <p class="hr5">
            87
            </p>
            <p class="hr6">
            76
            </p>
            <p class="hr7">
            86
            </p>
            <p class="hr8">
            84
            </p>
            <p class="hr9">
            82
            </p>
            <p class="hr10">
            84
            </p>
            <p class="hr11">
            87
            </p>
            <p class="hr12">
            83
            </p>
            <p class="hr13">
            85
            </p>

            <p class="br1">
            14
            </p>
            <p class="br2">
            15
            </p>
            <p class="br3">
            13
            </p>
            <p class="br4">
            12
            </p>
            <p class="br5">
            13
            </p>
            <p class="br6">
            16
            </p>
            <p class="br7">
            12
            </p>
            <p class="br8">
            17
            </p>
            <p class="br9">
            13
            </p>
            <p class="br10">
            12
            </p>
            <p class="br11">
            16
            </p>
            <p class="br12">
            14
            </p>
            <p class="br13">
            12
            </p>

            <p class="cl1">
            Ⅲ-2
            </p>
            <p class="cl2">
            Ⅲ-2
            </p>
            <p class="cl3">
            Ⅲ-1
            </p>
            <p class="cl4">
            0
            </p>
            <p class="cl5">
            0
            </p>
            <p class="cl6">
            0
            </p>
            <p class="cl7">
            0
            </p>
            <p class="cl8">
            0
            </p>
            <p class="cl9">
            0
            </p>
            <p class="cl10">
            0
            </p>
            <p class="cl11">
            0
            </p>
            <p class="cl12">
            0
            </p>
            <p class="cl13">
            0
            </p>

            </div>

            <h1>
                <a href="#">メールアドレス・パスワードの変更はこちら</a>
            </h1>
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
    .wrap {
    margin: 0;
    padding: 0;
    width: 1903px;
    height: 873px;
    background-color: aqua;
    background-image: url(~@/assets/detail.png);
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
    .d1 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 700px;
    }
    .d2 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 750px;
    }
    .d3 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 800px;
    }
    .d4 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 855px;
    }
    .d5 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 905px;
    }
    .d6 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 960px;
    }
    .d7 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 1010px;
    }
    .d8 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 1065px;
    }
    .d9 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 1115px;
    }
    .d10 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 1165px;
    }
    .d11 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 1220px;
    }
    .d12 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 1270px;
    }
    .d13 {
    font-weight: bold;
    position: absolute;
    top: 275px;
    left: 1325px;
    }

    .b1 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 700px;
    }
    .b2 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 750px;
    }
    .b3 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 800px;
    }
    .b4 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 855px;
    }
    .b5 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 905px;
    }
    .b6 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 960px;
    }
    .b7 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 1010px;
    }
    .b8 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 1065px;
    }
    .b9 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 1115px;
    }
    .b10 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 1165px;
    }
    .b11 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 1220px;
    }
    .b12 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 1270px;
    }
    .b13 {
    font-weight: bold;
    position: absolute;
    top: 340px;
    left: 1320px;
    }

    .hr1 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 705px;
    }
    .hr2 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 760px;
    }
    .hr3 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 810px;
    }
    .hr4 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 860px;
    }
    .hr5 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 915px;
    }
    .hr6 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 965px;
    }
    .hr7 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 1020px;
    }
    .hr8 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 1070px;
    }
    .hr9 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 1125px;
    }
    .hr10 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 1175px;
    }
    .hr11 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 1225px;
    }
    .hr12 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 1275px;
    }
    .hr13 {
    font-weight: bold;
    position: absolute;
    top: 425px;
    left: 1330px;
    }

    .br1 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 705px;
    }
    .br2 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 755px;
    }
    .br3 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 810px;
    }
    .br4 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 860px;
    }
    .br5 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 910px;
    }
    .br6 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 965px;
    }
    .br7 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 1015px;
    }
    .br8 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 1070px;
    }
    .br9 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 1120px;
    }
    .br10 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 1175px;
    }
    .br11 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 1225px;
    }
    .br12 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 1275px;
    }
    .br13 {
    font-weight: bold;
    position: absolute;
    top: 500px;
    left: 1330px;
    }

    .cl1 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 698px;
    }
    .cl2 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 750px;
    }
    .cl3 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 800px;
    }
    .cl4 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 865px;
    }
    .cl5 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 920px;
    }
    .cl6 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 970px;
    }
    .cl7 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 1023px;
    }
    .cl8 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 1073px;
    }
    .cl9 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 1125px;
    }
    .cl10 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 1178px;
    }
    .cl11 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 1229px;
    }
    .cl12 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 1285px;
    }
    .cl13 {
    font-weight: bold;
    position: absolute;
    top: 575px;
    left: 1335px;
    }
    
</style>