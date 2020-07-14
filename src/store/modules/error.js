const namespaced = true;

const state = {
  error: null,
};

const getters = {
  error(state) {
    return state.error;
  },
};

const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
  clearError(state) {
    state.error = null;
  },
};

const actions = {
  clearError({ commit }) {
    commit("clearError");
  },
  setError({ commit }, payload) {
    commit("setError", payload);
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
