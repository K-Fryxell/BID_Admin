<template>
    <v-main class="ma-0 pa-0" style="background:radial-gradient(#fff,#707070); height:100%">
        <v-row class="ma-0 pa-0" justify="center" @click="toTop">
            <img width="18%" src="@/assets/logo1.png" style="margin: 50vh auto 0; transform: translateY(-50%);">
        </v-row>
    </v-main>
</template>
<script>
export default {
    components: {},
    data () {return {}},
    methods:{
        toTop(){
            this.$router.push('/top')
        }
    }
}
</script>
