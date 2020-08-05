<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-card-title class="text-center">{{ aboutTitle }}</v-card-title>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto" v-for="(item, index) in about" :key="index">
          <v-card-text>Post: {{ item }}</v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "About",
  computed: {
    about() {
      return this.$store.getters["about/about"];
    },
    appName() {
      return this.$store.getters["settings/appName"];
    },
    aboutTitle() {
      return "About the project";
    },
  },
  methods: {
    loadAbout() {
      this.$store.dispatch("about/loadAbout");
    },
  },
  mounted() {
    this.loadAbout();
  },
};
</script>
