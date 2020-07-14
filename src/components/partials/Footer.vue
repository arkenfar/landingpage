<template>
  <v-footer
    height="75"
    max-height="150"
    :inset="footer.inset"
    app
    padless
    elevation="24"
  >
    <v-row
      no-gutters
      justify="space-around"
      align="center"
      style="max-height:80%;"
    >
      <v-row no-gutters justify="center" align="end" class="mt-2">
        <p class="subtitle-2 text-center">{{ copyrights }}</p>
      </v-row>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",

  data: () => ({
    footer: {
      inset: true,
    },
  }),

  computed: {
    copyrights() {
      return this.$store.getters["settings/copyrights"];
    },
  },
};
</script>
