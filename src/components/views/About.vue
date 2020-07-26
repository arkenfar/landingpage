<template>
  <v-card>
    <v-container>
      <v-card-title>{{ aboutTitle }}</v-card-title>
      <v-card-text>
        {{ about }}
      </v-card-text>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "About",
  computed: {
    about() {
      return this.$store.getters["settings/about"];
    },
    aboutTitle() {
      return "About Title Placeholder";
    },
  },
  methods: {
    loadAbout() {
      this.$store.dispatch("settings/loadAbout");
    },
  },
  mounted() {
    this.loadAbout();
  },
};
</script>
