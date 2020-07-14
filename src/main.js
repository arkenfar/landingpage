import Vue from "vue";
import App from "./App.vue";
import dotenv from "dotenv";
dotenv.config();
import vuetify from "./plugins/vuetify";
import { store } from "./store/index";
import AOS from "aos";
import "aos/dist/aos.css";
import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  created() {
    if (this.$store.getters["settings/useFirebase"] == true) {
      console.log("firebase will be used");
      firebase.initializeApp(this.$store.getters["settings/firebase"]);
    } else {
      console.info("firebase will not be used");
    }

    AOS.init({ disable: "phone" });
  },
  render: (h) => h(App),
}).$mount("#app");
