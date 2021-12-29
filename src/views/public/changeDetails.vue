<template>
    <v-card width="450px" class="mx-auto mt-2">
        <v-card-title>
            <h1 class="display-1">ユーザ情報登録変更</h1>
        </v-card-title>
        <v-card-text>
            <v-form v-model="valid">
                <!-- mail入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="mailaddress"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-email"
                            label="メールアドレス"
                            hint="メールアドレスは50字以下で記入してください。"
                            :rules="emailRules"
                            counter
                            required
                        />
                    </v-col>
                </v-row>
                
                <!-- 郵便番号入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="postNumber"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-currency-kzt"
                            label="郵便番号"
                            :rules="postNumberRules"
                            required
                        />
                    </v-col>
                </v-row>
                <!-- 住所入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="address"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-map-marker"
                            label="住所"
                            :rules="addressRules"
                            required
                        />
                    </v-col>
                </v-row>
                <!-- 電話番号入力 -->
                <v-row class="ma-0 pa-0">
                    <v-col>
                        <v-text-field
                            v-model="tel"
                            class="ma-0 pa-0 pb-6"
                            prepend-icon="mdi-phone-in-talk"
                            label="電話番号"
                            :rules="telRules"
                            required
                        />
                    </v-col>
                </v-row>
                <v-btn @click="regist" :disabled="!valid">送信</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth"
    import { getDatabase, ref, child, get, update } from "firebase/database"

    export default {
        name: "Regist",
        data() {
            return {
                valid: true,
                // 苗字
                fname:'',
                // 名前
                lname:'',
                // 性別
                sex: '',
                // メールアドレス
                mailaddress: "",
                // パスワード
                password: "",
                // 郵便番号
                postNumber: "",
                // 住所
                address: "",
                // 電話番号
                tel: "",

                // 入力しない項目(DBとしては存在しないとダメ)
                bodyTemperature: Number,
                bloodPressureMax: Number,
                bloodPressureMin: Number,
                heartRate: Number,
                consciousnessLevel: "",
                dopamine: Number,
                serotonin: Number,
                latitude: Number,
                longitude: Number,
                
                /////*****   ここからルール    *****/////
                // メールアドレス
                emailRules: [
                    v => !!v || 'E-mailが入力されていません',
                    v => /.+@.+\..+/.test(v) || 'E-mailの書式が間違っています',
                    v => /^\S+@\S+\.\S+$/.test(v) || 'E-mailの書式が間違っています',
                    v => /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(v) || 'E-mailの書式が間違っています',
                ],
                // 郵便番号
                postNumberRules: [
                    v => !!v || '入力欄が空白です。',
                    v => /^[0-9]{3}-[0-9]{4}$/.test(v) || '郵便番号の形式が違います',

                ],
                // 住所
                addressRules: [
                    v => !!v || '住所は必ず入力してください。',
                    v => (v && v.length <= 50) || '住所は50字以内にて入力してください。',
                    // eslint-disable-next-line no-irregular-whitespace
                    v => /^[^ 　]+$/.test(v) || 'スペースが入力されています。削除してください。',
                    // eslint-disable-next-line no-control-regex
                    v => /^[^\x01-\x7E\xA1-\xDF]+$/.test(v) || '住所は全角にて入力してください。'
                ],
                // 電話番号
                telRules: [
                    v => !!v || '入力欄が空白です。',
                    v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
                    v => /^0[789]0-[0-9]{4}-[0-9]{4}$/.test(v) || '電話番号の形式が違います'
                ]
            }
        },
        components: {},
        methods: {
            getUsersDB(){
                onAuthStateChanged(getAuth(), (user) => {
                    if (user) {
                        const dbRef = ref(getDatabase())
                        get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            console.log(snapshot.val())
                            this.username = snapshot.val().username
                            this.fname = snapshot.val().f_name,
                            this.lname = snapshot.val().l_name,
                            this.sex = snapshot.val().sex,
                            this.mailaddress = snapshot.val().email,
                            this.password = snapshot.val().password,
                            this.postNumber = snapshot.val().post_number,
                            this.address = snapshot.val().address,
                            this.tel = snapshot.val().tel,
                            this.consciousnessLevel = snapshot.val().consciousness_level,
                            this.bodyTemperature = snapshot.val().body_temperature,
                            this.bloodPressureMax = snapshot.val().blood_pressure_max,
                            this.bloodPressureMin = snapshot.val().blood_pressure_min,
                            this.heartRate = snapshot.val().heart_rate,
                            this.dopamine = snapshot.val().dopamine,
                            this.serotonin = snapshot.val().serotonin,
                            this.latitude = snapshot.val().latitude,
                            this.longitude = snapshot.val().longitude
                        } else {
                            console.log("No data available")
                        }
                        }).catch((error) => {
                            console.error(error)
                        })
                    }
                })
            },
            regist() {
                onAuthStateChanged(getAuth(), (user) => {
                    if (user) {
                        // User logged in already or has just logged in.
                        // ユーザーIDの取得
                        const db = getDatabase()
                        
                        //更新内容を設定
                        const postData = {
                            f_name: this.fname,                             // 苗字
                            l_name: this.lname,                             // 名前
                            sex: this.sex,                                  // 性別
                            email: this.mailaddress,                        // メールアドレス
                            password: this.password,                        // パスワード *最終的にDBには入れない*
                            post_number: this.postNumber,                   // 郵便番号
                            address: this.address,                          // 住所
                            tel: this.tel,                                  // 電話番号
                            consciousness_level: this.consciousnessLevel,   // 意識レベル
                            body_temperature: this.bodyTemperature,         // 体温
                            blood_pressure_max: this.bloodPressureMax,      // 最高血圧
                            blood_pressure_min: this.bloodPressureMin,      // 最低血圧
                            heart_rate: this.heartRate,                     // 心拍数
                            dopamine: this.dopamine,                        // ドーパミン値
                            serotonin: this.serotonin,                      // セロトニン値
                            latitude: this.latitude,                        // 緯度
                            longitude: this.longitude                       // 経度
                        }
                        //更新テーブルの決定(複数可)
                        const updates = {}
                        updates['/users/' + user.uid] = postData
                        //設定した内容でアップデート
                        update(ref(db), updates).then(() => {
                            console.log('update success')
                        }).catch((error) => {
                            console.log('update failed\n' + error)
                        })
                    }
                })
            }
        },
        computed: {},
        created() {
            this.getUsersDB()
        },
    }
</script>