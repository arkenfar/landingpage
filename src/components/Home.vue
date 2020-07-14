<template>
  <v-card min-width="100vw">
    <Banner></Banner>
    <Countdown></Countdown>
    <Sneakpeak></Sneakpeak>
    <Boxes></Boxes>
    <Map></Map>
  </v-card>
</template>
<script>
import Countdown from "./views/Countdown";
import Banner from "./views/Banner";
import Map from "./views/Map";
import Sneakpeak from "./views/Sneakpeak";
import Boxes from "./views/Boxes";

export default {
  name: "Home",
  components: { Countdown, Banner, Sneakpeak, Map, Boxes },
};
</script>
