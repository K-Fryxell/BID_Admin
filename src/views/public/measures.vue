<template>
    <v-main class="ma-0 pa-0" style="background:radial-gradient(#fff,#707070); height:100%"><!-- 背景グラデーション -->
		<v-navigation-drawer class="ma-0 pa-0" hide-overlay fixed height style="width:100%;" permanent touchless>
			<Header/>
		</v-navigation-drawer>

        <!-- 時間があれば：左右の⇒を状況に合わせて片方消したい -->
        <v-carousel hide-delimiters class="hidden-sm-and-down" height="100%" hide-delimiter-background>
            <v-carousel-item>
                <Measures/>
            </v-carousel-item>
            <v-carousel-item>
                <MeasuresDetails/>
            </v-carousel-item>
        </v-carousel>
        <v-row class="ma-0 pa-0 hidden-md-and-up">
            <Measures/>
            <MeasuresDetails/>
        </v-row>
    </v-main>
</template>

<script>
import Header from '@/components/public/Header.vue'
import Measures from '@/components/public/Measures.vue'
import MeasuresDetails from '@/components/public/MeasuresDetails.vue'

export default {
    name: 'top',
    components: {
      Header,
      Measures,
      MeasuresDetails
    },
    data () {
        return {
            items: [
          {
            src: '@/assets/logo.png',
          },
          {
            src: '@/assets/logo1.png',
          }
            ]
        }
    },
}
</script>
