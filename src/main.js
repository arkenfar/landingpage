import Vue from "vue";
import App from "./App.vue";
import dotenv from "dotenv";
dotenv.config();
import vuetify from "./plugins/vuetify";
import { store } from "./store/index";
import AOS from "aos";
import "aos/dist/aos.css";
import * as firebase from "firebase";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  VueAxios,
  axios,
  created() {
    AOS.init();
    // AOS.init({ disable: "phone" });
    if (this.$store.getters["settings/useFirebase"] == true) {
      firebase.initializeApp(this.$store.getters["settings/firebase"]);
    }
    if (this.$store.getters["settings/color"] == undefined) {
      console.log("UNDEFINDDED");
      this.$store.dispatch("settings/loadColorFromVuetify");
    }
  },
  render: (h) => h(App),
}).$mount("#app");
