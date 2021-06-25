import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import VueTextareaAutosize from "vue-textarea-autosize"
import firebase from "firebase/app"
import "firebase/firestore"

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBqNCNsazRo6EsIH5cRke3_nDp5UoiXyGQ",
  authDomain: "vue-calendar-1c737.firebaseapp.com",
  projectId: "vue-calendar-1c737",
  storageBucket: "vue-calendar-1c737.appspot.com",
  messagingSenderId: "242684016778",
  appId: "1:242684016778:web:7788191855ee3d2aab5573",
})

export const db = firebase.firestore()

db.useEmulator("localhost", 9099)

new Vue({
  vuetify,
  render: h => h(App),
}).$mount("#app")
