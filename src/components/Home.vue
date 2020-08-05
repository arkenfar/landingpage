<template>
  <v-row justify="center" no-gutters>
    <v-col cols="auto">
      <v-row v-if="loading" no-gutters>
        <Loading size="250" class="mt-5"></Loading>
      </v-row>
      <v-row v-if="error" no-gutters>
        <Error size="250" class="mt-5" :errorMsg="error"></Error>
      </v-row>

      <Banner></Banner>
      <Countdown></Countdown>
      <v-divider></v-divider>

      <Sneakpeak v-if="useFirebase"></Sneakpeak>
      <v-divider></v-divider>
      <!-- <Boxes></Boxes> -->

      <!-- <Map title="Your Location.."></Map> -->
      <GitHub></GitHub>
      <!-- <GoogleMaps></GoogleMaps> -->
      <About v-if="useFirebase"></About>
      <Contact></Contact>
      <!-- <WorldPopulation ></WorldPopulation> -->
      <ReverseGeoLocation></ReverseGeoLocation>
      <SocialMedia></SocialMedia>
    </v-col>
  </v-row>
</template>
<script>
import Loading from "./shared/Loading";
import Error from "./shared/Error";
import Countdown from "./views/Countdown";
import Banner from "./views/Banner";
import ReverseGeoLocation from "./views/ReverseGeoLocation";
import SocialMedia from "./views/SocialMedia";
// import Map from "./views/Map";
import Sneakpeak from "./views/Sneakpeak";
// import Boxes from "./views/Boxes";
import About from "./views/About";
import Contact from "./views/Contact";
// import WorldPopulation from "./views/WorldPopulation";
// import GoogleMaps from "./views/GoogleMaps";
import GitHub from "./views/GitHub";

export default {
  name: "Home",
  components: {
    Countdown,
    Banner,
    ReverseGeoLocation,
    Sneakpeak,
    // Map,
    // Boxes,
    SocialMedia,
    About,
    Loading,
    Error,
    Contact,
    // GoogleMaps,
    GitHub,
    // WorldPopulation,
  },

  computed: {
    loading() {
      return this.$store.getters["loading/loading"];
    },
    useFirebase() {
      return this.$store.getters["settings/useFirebase"];
    },
    error: {
      get() {
        return this.$store.getters["error/error"];
      },
      set(value) {
        this.$store.dispatch("error/setError", value);
      },
    },
  },
};
</script>
