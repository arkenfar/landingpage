const namespaced = true;

const state = {
  geoLocation: undefined,
};

const getters = {
  geoLocation(state) {
    return state.geoLocation;
  },
};

const mutations = {
  setGeoLocation(state, payload) {
    state.geoLocation = payload;
  },
};

const actions = {
  setUserGeoLocation({ commit }) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((geoLoc) => {
        console.log("Geo Location store object: ", geoLoc);
        let geoloc = {
          latitude: geoLoc.coords.latitude,
          longitude: geoLoc.coords.longitude,
        };
        commit("setGeoLocation", geoloc);
      });
    } else {
      let geoloc = {
        latitude: 0,
        longitude: 0,
        title: "Geolocation is not supported by this browser.",
      };
      commit("setGeoLocation", geoloc);
      console.log("Geolocation is not supported by this browser.");
    }
    console.log(this.geoLocation);
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
