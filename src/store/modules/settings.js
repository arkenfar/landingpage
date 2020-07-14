import Vuetify from "../../plugins/vuetify";
import Constants from "../../constants/Constants";

const namespaced = true;

const state = {
  appName: Constants.APPLICATION.GET_APP_NAME(),
  darkMode: Constants.APPLICATION.DARKMODE,
  logo: Constants.APPLICATION.LOGO,
  logoDarkMode: Constants.APPLICATION.LOGO_DARK_MODE,
  copyrights: Constants.COPYRIGHTS.GET_COPYRIGHTS(),
  tbaDate: Constants.APPLICATION.GET_TBA_DATE(),
  projectCreatedDate: Constants.APPLICATION.GET_PROJECT_CREATED_DATE(),
  countdown: undefined,
  percentageRemaining: undefined,
  useFirebase: Constants.APPLICATION.USE_FIREBASE(),
  firebase: Constants.FIREBASE,
};

const getters = {
  appName(state) {
    return state.appName;
  },
  tbaDate(state) {
    return state.tbaDate;
  },
  projectCreatedDate(state) {
    return state.projectCreatedDate;
  },
  percentageRemaining(state) {
    return state.percentageRemaining;
  },
  countdown(state) {
    return state.countdown;
  },
  logo(state) {
    return state.logo;
  },
  logoDarkMode(state) {
    return state.logoDarkMode;
  },
  darkMode(state) {
    return state.darkMode;
  },
  copyrights(state) {
    return state.copyrights;
  },
  useFirebase(state) {
    return state.useFirebase;
  },
  firebase(state) {
    return state.firebase;
  },
};

const mutations = {
  setDarkMode(state, payload) {
    state.darkMode = payload;
  },
  setCountdown(state, payload) {
    state.countdown = payload;
  },
  setPercentageRemaining(state, payload) {
    state.percentageRemaining = payload;
  },
};

const actions = {
  darkMode({ commit }, payload) {
    Vuetify.framework.theme.isDark = payload;
    Vuetify.framework.theme.dark = payload;
    commit("setDarkMode", payload);
  },
  countdown({ commit }, payload) {
    commit("setCountdown", payload);
  },
  percentageRemaining({ commit }, payload) {
    commit("setPercentageRemaining", payload);
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
