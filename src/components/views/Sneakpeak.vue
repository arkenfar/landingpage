<template>
  <div data-aos="zoom-in">
    <v-carousel hide-delimiters v-if="!loading">
      <v-carousel-item
        v-for="(item, i) in sneakpeak"
        :key="i"
        :src="item"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "Sneakpeak",

  computed: {
    sneakpeak() {
      return this.$store.getters["settings/sneakpeak"];
    },
    loading() {
      return this.$store.getters["loading/loading"];
    },
  },
  methods: {},
  mounted() {
    this.$store.dispatch("settings/loadSneakpeak");
    console.log(this.sneakpeak);
  },
};
</script>
