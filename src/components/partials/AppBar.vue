<template>
  <div class="navigation-app-bar">
    <v-app-bar app class="primary">
      <v-img alt="Logo" :src="logo" max-height="100" max-width="100" />
      <v-spacer></v-spacer>
      <v-menu bottom left :close-on-content-click="false" :y-offset="true">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-horizontal-circle-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-checkbox
              v-model="darkMode"
              color="secondary"
              label="Dark mode"
              class="mt-5"
              :mandatory="false"
            />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  props: ["appName"],
  computed: {
    logo() {
      return this.$store.getters["settings/logoDarkMode"];
    },
    showLogo() {
      return this.logo !== null && this.logo !== undefined;
    },
    darkMode: {
      get() {
        return this.$store.getters["settings/darkMode"];
      },
      set(value) {
        this.$store.dispatch("settings/darkMode", value);
      },
    },
  },
  methods: {
    setDarkMode() {
      this.$store.dispatch("settings/darkMode");
    },
  },
  mounted() {
    let x = this.darkMode;
    this.darkMode = x;
  },
};
</script>

<style scoped></style>
