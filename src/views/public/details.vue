<template>
    <v-main class="ma-0 pt-lg-12 pa-0" style="background:radial-gradient(#fff,#707070); height:100%">
        <v-navigation-drawer class="ma-0 pa-0" hide-overlay fixed height style="width:100%;" permanent touchless>
			<Header/>
		</v-navigation-drawer>

        <v-layout class="ma-0 mt-12 pa-0">
            <v-row class="ma-0 pa-0 hidden-sm-and-down" justify="center">
                <v-flex lg5>
                    <div id="Detail">
                        <!-- <v-card max-width="850px" class="mx-auto d-none d-sm-block"> -->
                        <v-card class="">
                            <v-tabs
                            style="margin-top:40px;"
                            vertical>
                            <v-tab
                            v-for="(item, idx) in items"
                            :key="`navi_vertical-${idx}`">
                                <v-icon left>
                                {{item.icon}}
                                </v-icon>
                                {{ item.navi }}
                            </v-tab>

                            <v-tab-item
                            v-for="(item, idx) in items"
                            :key="`content_vertical-${idx}`"
                            height="100px">
                                <v-card flat>
                                <v-card-text>
                                <component :is="item.template" />
                                </v-card-text>
                                </v-card>
                            </v-tab-item>
                            </v-tabs>
                        </v-card>
                    </div>
                </v-flex>
            </v-row>
            <!-- Phone -->
            <v-row class="ma-0 mt-12 pa-0 hidden-md-and-up" style="width:100%;" justify="center">
                <v-flex xs11>
                    <div id="Detail">
                        <v-card 
                            show-arrows
                            background-color="primary"
                            class="ma-0 pa-0"
                            style="height:40%"
                            >
                                <v-tabs
                                centered
                                v-model="tab"
                                show-arrows
                                style="margin-top:10%"
                                >
                                <v-tab
                                    v-for="item in items"
                                    :key="`navi_arrows-${item.navi}`"
                                >
                                    {{ item.navi }}
                                </v-tab>
                                </v-tabs>

                            <v-tabs-items v-model="tab">
                            <v-tab-item
                                v-for="item in items"
                                :key="`content_arrows-${item.icon}`"
                                
                            >
                                <v-card flat>
                                <v-card-text>
                                <div style="height:40%">
                                    <component :is="item.template" />
                                </div>
                                </v-card-text>
                                </v-card>
                            </v-tab-item>
                            </v-tabs-items>
                        </v-card>
                    </div>
                </v-flex>
            </v-row>
        </v-layout>
        
    </v-main>
</template>

<script>
import Header from '@/components/public/Header'
import BodyTemperatureChart from '@/components/chart/BodyTemperatureChart'
import BloodPressureChart from '@/components/chart/BloodPressureChart'
import HeartRateChart from '@/components/chart/HeartRateChart'
import DopamineChart from '@/components/chart/DopamineChart'
import SerotoninChart from '@/components/chart/SerotoninChart'

export default {
    name: "Detail",
    data() {
        return {
        tab: null,
        items: [
            { navi: '　　体温　', icon: 'mdi-thermometer', template: 'BodyTemperatureChart'},
            { navi: '　　血圧　', icon: 'mdi-ray-vertex', template: 'BloodPressureChart'},
            { navi: '　心拍数　', icon: 'mdi-heart-pulse', template: 'HeartRateChart'},
            { navi: 'ドーパミン', icon: 'mdi-head-snowflake-outline', template: 'DopamineChart'},
            { navi: 'セロトニン', icon: 'mdi-head-heart-outline', template: 'SerotoninChart'}
        ],
        }
    },
    components: {
        Header,
        BodyTemperatureChart,
        BloodPressureChart,
        HeartRateChart,
        DopamineChart,
        SerotoninChart
    },
    methods: {  },
    created() {},
    computed: {},
    mounted () {}
}
</script>