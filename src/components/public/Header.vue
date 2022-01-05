<template>
    <v-card class="ma-0 pa-0 ma-0 pa-0" style="background-color: #fff" tile elevation="0">
        <v-toolbar class="ma-0 pa-0" dense elevation="0" flat height="70px"
        style="background-color: #fff;
        border-style: solid;
        border-color: #fff #fff #000 #fff;
        border-width: 0px 0px 15px 0px;">
            <v-toolbar-title class="ma-0 pa-0 pt-0">
                <router-link to="top">
                    <!--ロゴ <img> -->
                    <img height="35px" src="@/assets/logo1.png">
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="ma-0 pa-0"
                        color="green"
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon class="ma-0 pa-0 pb-2" x-large style="color: #83B590">mdi-microsoft-xbox-controller-menu</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item to="change_details">
                        ユーザ情報変更
                    </v-list-item>
                    <v-list-item to='user_details'>
                        バイタルログ
                    </v-list-item>
                    <v-list-item to='#'>
                        異常ログ
                    </v-list-item>
                    <v-list-item to="#">
                        通知確認
                    </v-list-item>
                    <v-list-item to="#">
                        システム設定
                    </v-list-item>
                    <v-list-item to="#">
                        お問い合わせ
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
