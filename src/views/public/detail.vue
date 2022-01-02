<template>
    <div id="Detail">
    <Header />

    <v-card max-width="800px" class="mx-auto d-none d-sm-block">
    <v-tabs 
    style="margin-top:150px"
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
          <BarChart />
          </v-card-text>
        </v-card>
      </v-tab-item>
      </v-tabs>
  </v-card>

  <v-card 
    show-arrows
    background-color="primary"
    class="d-block d-sm-none"
    style="height:40%"
    >
        <v-tabs
          centered
          v-model="tab"
          show-arrows
          style="margin-top:20%"
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
        :key="`content_arrows-${item.content}`"
        eager
      >
        <v-card flat>
          <v-card-text>
           <div style="height:40%">
              <BarChart />
           </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</div>
</template>

<script>
import Header from '@/components/public/Header'
import BarChart from '@/components/chart/BarChart'

export default {
    name: "Detail",
    data() {
        return {
        tab: null,
        items: [
            { navi: '　　体温　', icon: 'mdi-thermometer'},
            { navi: '　　血圧　', icon: 'mdi-ray-vertex'},
            { navi: '　心拍数　', icon: 'mdi-heart-pulse'},
            { navi: 'ドーパミン', icon: 'mdi-head-snowflake-outline'},
            { navi: 'セロトニン', icon: 'mdi-head-heart-outline'},
        ],
        }
    },
    components: {
        Header,
        BarChart
    },
    methods: {  
    },
    created() {
    },
    computed: {},
    mounted () {
    }
};
</script>