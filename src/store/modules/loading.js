const namespaced = true;

const state = {
  loading: false,
};

const getters = {
  loading(state) {
    return state.loading;
  },
};

const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
};

const actions = {
  setLoading({ commit }, payload) {
    commit("setLoading", payload);
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
