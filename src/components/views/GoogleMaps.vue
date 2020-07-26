<template>
  <v-card width="180vw" id="gmaps">
    <v-container>
      <v-row justify="center" align="center">
        <v-card-title class="text-center">GoogleMaps</v-card-title>
        <input id="latlng" type="text" value="40.714224,-73.961452" />
        <input id="submit" type="button" value="Reverse Geocode" />
        <div id="googleMap" ref="googleMap">
          <template v-if="Boolean(this.google) && Boolean(this.map)">
            <slot :google="google" :map="map" />
          </template>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import { Loader } from "google-maps";

export default {
  name: "GoogleMaps",
  props: {
    mapConfig: Object,
    apiKey: { type: String, default: process.env.VUE_APP_GOOGLE_API_KEY },
  },
  data() {
    return {
      google: null,
      map: null,
    };
  },
  methods: {
    initMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },
  },
  async mounted() {
    const loader = new Loader(this.apiKey);
    const googleLoader = await loader.load();

    this.google = googleLoader;
    this.initMap();
  },
};
</script>
<style lang="scss">
#gmaps {
  background-color: red;
}
#googleMap {
  height: 100%;
}
</style>
