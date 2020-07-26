import Vue from "vue";
import Vuex from "vuex";

// Modules
import settings from "./modules/settings";
import loading from "./modules/loading";
import error from "./modules/error";
import user from "./modules/user";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    settings,
    loading,
    error,
    user,
  },
});
