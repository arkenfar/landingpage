import * as firebase from "firebase";

const namespaced = true;

const state = {
  posts: [],
};

const getters = {
  posts(state) {
    return state.posts;
  },
};

const mutations = {
  addPost(state, payload) {
    state.posts.push(payload);
  },
  removePost(state) {
    state.posts = [];
  },
  loadAbout({ commit }) {
    this.dispatch("loading/setLoading", true);
    var dbRef = firebase.database().ref("/about");

    dbRef.on("value", (snapshot) => {
      if (snapshot.val() == null) {
        this.dispatch("error/setError", "No 'about' data found.");
        return;
      }
      commit("setAbout", snapshot.val());
    });
    this.dispatch("loading/setLoading", false);
  },
};

const actions = {
  addPost({ commit }, payload) {
    commit("addPost", payload);
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
