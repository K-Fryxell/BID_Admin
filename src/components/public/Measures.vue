<template>
  <v-content>
    <Header/>
    <v-container class="ma-0 pa-0" fluid>
        <v-layout class="ma-0 pa-0">
            <v-row class="ma-0 pa-0" justify="center">
                <v-title class="display-1">
                    <strong class="display-2" style="color:red; text-decoration:underline; text-decoration-color:#808080;">心房細動</strong>の可能性があります。
                </v-title>
                
            </v-row>
        </v-layout>
    </v-container>



    <div>
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
            <img src="..\..\assets/item.png" alt="項目" class="item" /><a href="https://www.mghp.ome.tokyo.jp/"
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
        </div>
    </v-content>
</template>



<script>
  import Header from '@/components/public/Header.vue'

  export default {
      name: 'userMeasurs',
      components: {
        Header
      },
      data () {
          return {
              
          }
      },
  }
</script>