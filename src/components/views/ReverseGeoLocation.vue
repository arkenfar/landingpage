<template>
  <v-card v-if="data != null">
    <v-card-title> {{ cityAndCountry }} </v-card-title>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  name: "ReverseGeoLocation",
  data() {
    return { data: null };
  },
  computed: {
    geoLocation() {
      return this.$store.getters["user/geoLocation"];
    },
    geoLocationApiUrl() {
      return this.$store.getters["settings/geoLocation"];
    },
    cityAndCountry() {
      return this.data.city + ", " + this.data.country_name;
    },
  },
  methods: {
    loadGeoLocation() {
      this.$store.dispatch("user/setUserGeoLocation");
    },
  },
  mounted() {
    this.loadGeoLocation();

    axios
      .get(this.$store.getters["settings/geoLocation"].getApiUrl())
      .then((res) => {
        console.log("gea api res", res);
        this.data = res.data;
        console.log(
          "gea api url",
          this.$store.getters["settings/geoLocation"].getApiUrl()
        );
      })
      .catch((err) => {
        this.error = "Failed to connect to geo loc api:" + err;
      });
  },
};
</script>
