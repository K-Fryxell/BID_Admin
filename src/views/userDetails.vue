<template>
<v-container>
    <v-card-title>ユーザ詳細</v-card-title>
    <v-card-text>ユーザ３様</v-card-text>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
    ></v-data-table>
    
    <!-- mail -->
    <v-row class="mt-5 ml-12 pl-9">
        <v-card-title>メール送信</v-card-title>
    </v-row>
    <v-row class="mt-10 ml-12 pl-12">
        <v-form>
            <v-row>
                <v-card-title>
                    送信先メールアドレス
                </v-card-title>
            </v-row>
            <v-row>
                <v-text-field
                v-model="mailAddress"
                hint="メールアドレス"
                required>
                </v-text-field>
            </v-row>
            <v-row>
                <v-card-title>
                    通報
                </v-card-title>
            </v-row>
            <v-row>
                <v-radio-group
                v-model="radioGroup"
                column>
                    <v-radio
                        label="警察"
                        value="2"
                    ></v-radio>
                    <v-radio
                        label="救急車"
                        value="0"
                    ></v-radio>
                </v-radio-group>
            </v-row>
            <v-row justify="center" align="center" class="ma-0 pa-0 mt-2">
                <v-btn
                    @click="sendmail"
                    dark
                    style="background-color: grey"
                    outlined
                    rounded
                    class="mr-4 white--text mb-5"
                    width="120"
                    >
                    送信
                </v-btn>
            </v-row>
            <v-row></v-row>
        </v-form>
    </v-row>
    <v-dialog v-model="dialog" class="ma-0 pa-0">
        <v-card class="ma-0 pt-12 pl-12 pr-12 pb-8">
            <v-row class="ma-0 pa-0" justify="center">
                <v-card-title class="ma-0 pa-0">通報処理を完了しました</v-card-title>
            </v-row>
            <v-row class="ma-0 pa-0" justify="center">
                <v-btn
                    dark
                    style="background-color: grey"
                    outlined
                    rounded
                    class="mt-6 ma-0 pa-0 white--text"
                    to="/"
                >
                    確認
                </v-btn>
            </v-row>
        </v-card>
    </v-dialog>
</v-container>
</template>

<script>
export default {
name: "Home",

components: {},
methods:{
    // モーダルを閉じる
        close(){
            this.dialog = false
        },
        sendmail() {
            console.log("sendmail_method")
                    this.axios.get('http://localhost:8000/mail/', {
                        params: {
                            recipient: this.mailAddress,
                            abnormal_num: this.radioGroup,
                            detail_num: "0",
                        }
                    }).then(function (response) {
                        console.log(response)
                    }).catch(function (error) {
                        console.log(error)
                    })
                },
},
data() {
    return {
        // モーダル表示・非表示
        dialog:false,
        
        mailAddress: "",
        radioGroup: "",
        detail: "0",
    headers: [
        {
        text: "バイタル名",
        align: "start",
        sortable: false,
        value: "name",
        },
        { text: "0時", value: "oclock0" },
        { text: "3時", value: "oclock3" },
        { text: "6時", value: "oclock6" },
        { text: "9時", value: "oclock9" },
        { text: "12時", value: "oclock12" },
        { text: "15時", value: "oclock15" },
        { text: "18時", value: "oclock18" },
        { text: "21時", value: "oclock21" },
        { text: "24時", value: "oclock24" },
    ],
    desserts: [
        {
        name: "体温(℃)",
        oclock0: "36.4",
        oclock3: "36.5",
        oclock6: "36.3",
        oclock9: "36.2",
        oclock12: "36.4",
        oclock15: "36.6",
        oclock18: "36.5",
        oclock21: "36.5",
        oclock24: "36.3",
        },
        {
        name: "心拍数(bpm)",
        oclock0: "68",
        oclock3: "72",
        oclock6: "70",
        oclock9: "82",
        oclock12: "78",
        oclock15: "76",
        oclock18: "70",
        oclock21: "69",
        oclock24: "78",
        },
        {
        name: "血圧(mmHg)",
        oclock0: "111",
        oclock3: "110",
        oclock6: "108",
        oclock9: "112",
        oclock12: "109",
        oclock15: "107",
        oclock18: "106",
        oclock21: "113",
        oclock24: "104",
        },
        {
        name: "最低血圧(mmHg)",
        oclock0: "70",
        oclock3: "74",
        oclock6: "68",
        oclock9: "69",
        oclock12: "73",
        oclock15: "70",
        oclock18: "72",
        oclock21: "67",
        oclock24: "69",
        },
        {
        name: "呼吸回数（回/分）",
        oclock0: "15",
        oclock3: "16",
        oclock6: "18",
        oclock9: "16",
        oclock12: "18",
        oclock15: "16",
        oclock18: "17",
        oclock21: "13",
        oclock24: "15",
        },
        {
        name: "意識レベル",
        oclock0: "0",
        oclock3: "0",
        oclock6: "0",
        oclock9: "0",
        oclock12: "0",
        oclock15: "0",
        oclock18: "0",
        oclock21: "0",
        oclock24: "0",
        },
        {
        name: "ビタミンA(μg)",
        oclock0: "268",
        oclock3: "278",
        oclock6: "266",
        oclock9: "286",
        oclock12: "265",
        oclock15: "280",
        oclock18: "254",
        oclock21: "262",
        oclock24: "252",
        },
        {
        name: "ビタミンB1(mg)",
        oclock0: "0.8",
        oclock3: "0.9",
        oclock6: "1.1",
        oclock9: "0.7",
        oclock12: "0.8",
        oclock15: "0.7",
        oclock18: "0.6",
        oclock21: "0.7",
        oclock24: "1.2",
        },
        {
        name: "ビタミンB2(mg)",
        oclock0: "0.6",
        oclock3: "0.7",
        oclock6: "0.7",
        oclock9: "1.2",
        oclock12: "1.1",
        oclock15: "0.8",
        oclock18: "0.9",
        oclock21: "0.8",
        oclock24: "1.1",
        },
        {
        name: "ビタミンC(mg)",
        oclock0: "69",
        oclock3: "56",
        oclock6: "76",
        oclock9: "40",
        oclock12: "55",
        oclock15: "65",
        oclock18: "63",
        oclock21: "57",
        oclock24: "58",
        },
        {
        name: "ビタミンD(ng/mL)",
        oclock0: "36",
        oclock3: "39",
        oclock6: "25",
        oclock9: "43",
        oclock12: "36",
        oclock15: "38",
        oclock18: "32",
        oclock21: "27",
        oclock24: "39",
        },
        {
        name: "ビタミンk1(ng/mL)",
        oclock0: "0.15",
        oclock3: "0.18",
        oclock6: "0.17",
        oclock9: "0.22",
        oclock12: "0.21",
        oclock15: "0.18",
        oclock18: "0.17",
        oclock21: "0.19",
        oclock24: "0.24",
        },
        {
        name: "鉄(μg/dL)",
        oclock0: "97",
        oclock3: "108",
        oclock6: "101",
        oclock9: "126",
        oclock12: "87",
        oclock15: "109",
        oclock18: "138",
        oclock21: "107",
        oclock24: "123",
        },
        {
        name: "亜鉛(μg/dL)",
        oclock0: "79",
        oclock3: "80",
        oclock6: "90",
        oclock9: "120",
        oclock12: "110",
        oclock15: "107",
        oclock18: "98",
        oclock21: "124",
        oclock24: "115",
        },
        {
        name: "胴(μg/dL",
        oclock0: "85",
        oclock3: "121",
        oclock6: "117",
        oclock9: "92",
        oclock12: "124",
        oclock15: "108",
        oclock18: "98",
        oclock21: "82",
        oclock24: "79",
        },
        {
        name: "タンパク質(g/dL)",
        oclock0: "6.7",
        oclock3: "8.1",
        oclock6: "7.2",
        oclock9: "7.3",
        oclock12: "6.9",
        oclock15: "7.9",
        oclock18: "7.5",
        oclock21: "7.1",
        oclock24: "7.3",
        },
        {
        name: "中性脂肪(mg/dl)",
        oclock0: "127",
        oclock3: "112",
        oclock6: "108",
        oclock9: "128",
        oclock12: "138",
        oclock15: "103",
        oclock18: "121",
        oclock21: "119",
        oclock24: "116",
        },
        {
        name: "カルシウム(mg/dL)",
        oclock0: "8.8",
        oclock3: "9.1",
        oclock6: "9.2",
        oclock9: "10.1",
        oclock12: "9.8",
        oclock15: "8.9",
        oclock18: "9.4",
        oclock21: "9.9",
        oclock24: "10.2",
        },
        {
        name: "総コレステロール(mg/dL)",
        oclock0: "190",
        oclock3: "211",
        oclock6: "187",
        oclock9: "183",
        oclock12: "172",
        oclock15: "193",
        oclock18: "182",
        oclock21: "178",
        oclock24: "186",
        },
        {
        name: "LDLコレステロール(mg/dL)",
        oclock0: "138",
        oclock3: "121",
        oclock6: "129",
        oclock9: "132",
        oclock12: "123",
        oclock15: "134",
        oclock18: "128",
        oclock21: "132",
        oclock24: "125",
        },
    ],
    };
}
}
</script>
