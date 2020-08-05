// import * as firebase from "firebase";

const namespaced = true;

const state = {};

const getters = {};

const mutations = {};

const actions = {
  sendContactForm(_, formData) {
    let { email, message, subject } = formData;
    this.dispatch("loading/setLoading", true);
    console.log("sendContactForm in store", email, message, subject);
    window.location.href =
      "https://us-central1-nevelsfjord.cloudfunctions.net/sendMail?subject=" +
      subject +
      "&email=" +
      email +
      "&message=" +
      message +
      "";
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
