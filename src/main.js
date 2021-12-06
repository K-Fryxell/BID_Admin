import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDl5MZLRDgTqdT9rfS2p7p5uKOolbWFiRc",
  authDomain: "bid-37c37.firebaseapp.com",
  databaseURL: "https://bid-37c37-default-rtdb.firebaseio.com",
  projectId: "bid-37c37",
  storageBucket: "bid-37c37.appspot.com",
  messagingSenderId: "219455704356",
  appId: "1:219455704356:web:09f33fff2b0dbbbf09f7b1",
  measurementId: "G-2TSNZ4266G"
};

initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
