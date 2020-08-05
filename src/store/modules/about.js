import * as firebase from "firebase";

const namespaced = true;

const state = {
  about: [],
};

const getters = {
  about(state) {
    return state.about;
  },
};

const mutations = {
  setAbout(state, payload) {
    state.about = payload;
  },
  removeAboutt(state) {
    state.about = [];
  },
};

const actions = {
  loadAbout({ commit }) {
    this.dispatch("loading/setLoading", true);
    var dbRef = firebase.database().ref("/about");

    dbRef.on("value", (snapshot) => {
      if (snapshot.val() == null) {
        return;
      }
      let arr = Object.keys(snapshot.val()).map((key) => {
        return snapshot.val()[key];
      });
      console.log("About array", arr);
      commit("setAbout", arr);
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
