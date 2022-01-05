<template>
    <v-main>
        <Header/>
        <v-container class="ma-0 pa-0" fluid>
            <v-layout class="ma-0 mt-8 pa-0" column>
                <v-row class="ma-4 mt-12 pa-0 pt-12" justify="center">
                    <v-card-title class="lg-display-1 pt-12" style="text-decoration:underline; text-decoration-color:#808080;">
                        <strong style="color:red;">心房細動</strong>の可能性があります
                    </v-card-title>
                </v-row>
                <v-row class="ma-4 mt-12 pa-0 pt-1" justify="center">
                    <v-flex class="ma-0 pa-0" lg7>
                        <!-- 症状例 -->
                        <v-row class="ml-n12 pa-0">
                            <v-card-title class="headline ml-n12"><strong>以下の症状が続く場合、病院で受診してください。</strong></v-card-title>
                        </v-row>
                        <!-- ul内：本来はデータベース連携 今回はやりません -->
                        <v-row class="ma-0 mt-6 pa-0" style="background-color:#FDF2F9; border-style: solid; border-color:grey; border-width:4px;">
                            <ul class="ml-12 mt-8 mb-3 pa-0">
                                <li class="pb-3 headline">動機</li>
                                <li class="pb-3 headline">胸の痛み</li>
                                <li class="pb-3 headline">息切れ</li>
                                <li class="pb-3 headline">めまい</li>
                            </ul>
                        </v-row>
                        <!-- 推奨病院 -->
                        <v-row class="ma-0 ml-n12 pa-0">
                            <v-card-title class="title ml-n12 mt-0 pt-9">
                                <strong>推奨病院</strong>
                            </v-card-title>
                        </v-row>
                        <v-row class="ma-0 pa-0">
                            <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            >
                                <v-col lg="6" class="red ma-0">
                                    <img src="@/assets/item.png" alt="項目"/>
                                    <v-list-item-content class="ma-0 ml-3 pa-0">
                                        <v-list-item-title v-text="item.text" class="ma-0 pa-0"></v-list-item-title>
                                    </v-list-item-content>
                                </v-col>
                            </v-list-item>
                        </v-row>
                        
                    </v-flex>
                </v-row>
            </v-layout>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        name: 'Measurs',
        data () {
            return {
                items: [
                    { text: '青梅市立総合病院'},
                    { text: '日本医科大学付属病院'},
                    { text: '東京都立多摩総合医療センター'},
                    { text: '綾瀬循環器病院'}
                ],
            }
        },
    }
</script>