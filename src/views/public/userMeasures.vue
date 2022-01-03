<template>
    <v-content class="ma-0 pa-0" style="background:radial-gradient(#fff,#c5c5c5);"><!-- 背景グラデーション -->
        <!-- pcヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-sm-and-down" fixed height style="width:100%;" permanent>
			<Header/>
		</v-navigation-drawer>
		<!-- 携帯ヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-md-and-up" fixed height style="width:100%; height:70px;" permanent>
			<Header/>
		</v-navigation-drawer>

        <!-- 時間があれば：左右の⇒を状況に合わせて片方消したい -->
        <v-carousel height="100%" hide-delimiter-background continuous="false" hide-delimiters="false">
            <v-carousel-item>
                <Measures/>
            </v-carousel-item>
            <v-carousel-item>
                <MeasuresDetails/>
            </v-carousel-item>
        </v-carousel>
    </v-content>
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
