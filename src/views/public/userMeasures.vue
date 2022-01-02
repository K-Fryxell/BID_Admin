<template>
    <v-content>
        <!-- pcヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-sm-and-down" fixed height style="width:100%;" permanent>
			<Header/>
		</v-navigation-drawer>
		<!-- 携帯ヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-md-and-up" fixed height style="width:100%; height:70px;" permanent>
			<Header/>
		</v-navigation-drawer>

        <v-carousel cycle="false" continuous="false">
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
