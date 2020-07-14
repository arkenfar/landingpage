<template>
  <div class="navigation">
    <AppBar :appName="appName" />
  </div>
</template>

<script>
import AppBar from "./AppBar";
export default {
  name: "Navigation",
  components: { AppBar },
  computed: {
    appName() {
      return this.$store.getters["settings/appName"];
    },
  },
};
</script>

<style scoped></style>
