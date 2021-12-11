<template>
    <v-container>
        <div class="wrap">
            <h1><strong>心房細動{{disease_name}}</strong>の可能性があります</h1>
            <p>以下の書状が続く場合、病院で診察をしてください。</p>
            <div class="box">
                <ul>
                    <v-card class="ma-0 pa-0" elevation="0" style="background-color:#FDF2FA;">
                        <li>動機{{symptoms}}</li>
                    </v-card>
                </ul>
            </div>
            <p>推奨病院</p>
            <v-card class="ma-0 pa-0" elevation="0" style="background-color:#F6F5F3">
                <template class="ma-0 pa-0">
                    <img src="..\..\assets/item.png" alt="項目" class="item" />
                    <a href="#">青梅市立総合病院{{hospital}}</a>
                </template>
            </v-card>
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

<script>
    // import firebase from 'firebase'

    export default {
        name: 'Home',
        components: {
        },
        data () {
            return {
                                
            }
        },
        computed:{
            
        },
    }
</script>
