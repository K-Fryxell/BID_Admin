<template>
    <v-card class="ma-0 pa-0 ma-0 pa-0 pt-6 pt-lg-0 pt-md-0 pt-sm-0" style="background-color: #83B590" tile elevation="0">
        <v-toolbar class="ma-0 pa-0" elevation="0" dense flat style="background-color: #83B590">
            <v-toolbar-title class="ma-0 pa-0 pt-3">
                <router-link to="/">
                    <!--ロゴ <img> -->
                    <img height="50" src="@/assets/logo.png">
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom left>
                <!-- <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="black"
                        dark
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon class="ma-0 pa-0 pr-5" x-large style="color: #FAFAFA">mdi-microsoft-xbox-controller-menu</v-icon>
                    </v-btn>
                </template> -->
                <v-list>
                    <v-list-item>    
                        <v-list-item-title>{{ name }}さん</v-list-item-title>  
                    </v-list-item>
                    <v-list-item to='#'>
                        マイページへ
                    </v-list-item>
                    <v-list-item to='#'>
                        
                    </v-list-item>
                    <v-list-item @click="logout">
                        ログアウト
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>
    </v-card>
</template>
<script>
export default {
    data(){
        return{
        }
    },
}
</script>
