import Vuetify from "../../plugins/vuetify";
import Constants from "../../constants/Constants";
import * as firebase from "firebase";

const namespaced = true;

const state = {
  appName: Constants.APPLICATION.GET_APP_NAME(),
  darkMode: Constants.APPLICATION.DARKMODE,
  color: Constants.APPLICATION.COLOR,
  logo: Constants.APPLICATION.LOGO,
  logoDarkMode: Constants.APPLICATION.LOGO_DARK_MODE,
  copyrights: Constants.COPYRIGHTS.GET_COPYRIGHTS(),
  tbaDate: Constants.APPLICATION.GET_TBA_DATE(),
  projectCreatedDate: Constants.APPLICATION.GET_PROJECT_CREATED_DATE(),
  countdown: undefined,
  percentageRemaining: undefined,
  useFirebase: Constants.APPLICATION.USE_FIREBASE(),
  firebase: Constants.FIREBASE,
  github: Constants.GITHUB,
  about: undefined,
  utils: Constants.UTILS,
};

const getters = {
  appName(state) {
    return state.appName;
  },
  utils(state) {
    return state.utils;
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
  color(state) {
    return state.color;
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
  github(state) {
    return state.github;
  },
  about(state) {
    return state.about;
  },
};

const mutations = {
  setDarkMode(state, payload) {
    state.darkMode = payload;
  },
  setColor(state, payload) {
    state.color = payload;
  },
  setCountdown(state, payload) {
    state.countdown = payload;
  },
  setPercentageRemaining(state, payload) {
    state.percentageRemaining = payload;
  },
  setAbout(state, payload) {
    state.about = payload;
  },
};

const actions = {
  darkMode({ commit }, payload) {
    Vuetify.framework.theme.isDark = payload;
    Vuetify.framework.theme.dark = payload;
    commit("setDarkMode", payload);
  },
  color({ commit }, payload) {
    if (this.state.settings.darkMode === true) {
      Vuetify.framework.theme.themes.dark.primary = payload.hex;
    } else {
      Vuetify.framework.theme.themes.light.primary = payload.hex;
    }
    commit("setColor", payload);
  },
  countdown({ commit }, payload) {
    commit("setCountdown", payload);
  },

  percentageRemaining({ commit }, payload) {
    commit("setPercentageRemaining", payload);
  },
  loadAbout({ commit }) {
    this.dispatch("loading/setLoading", true);
    var boardsRef = firebase.database().ref("/about");

    boardsRef.on("value", (snapshot) => {
      if (snapshot.val() == null) {
        return;
      }
      commit("setAbout", snapshot.val());
    });
    this.dispatch("loading/setLoading", false);
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
