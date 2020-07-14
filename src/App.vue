<template>
  <v-app>
    <Navigation></Navigation>
    <v-main>
      <Home></Home>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./components/partials/Footer";
import Navigation from "./components/partials/Navigation";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Footer,
    Navigation,
    Home,
  },
};
</script>
