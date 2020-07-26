<template>
  <v-app>
    <Navigation></Navigation>
    <v-container fluid>
      <v-main>
        <Home></Home>
      </v-main>
    </v-container>

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
