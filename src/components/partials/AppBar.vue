<template>
  <v-app-bar
    app
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : !darkMode ? 'white' : 'dark'"
    fixed
    flat
  >
    <v-slide-x-transition>
      <v-img
        alt="Logo"
        v-if="showLogo"
        :src="logo"
        class="shrink"
        contain
        max-height="100"
        max-width="100"
      />
    </v-slide-x-transition>

    <!-- <v-img alt="Logo" :src="logo" max-height="100" max-width="100" /> -->
    <v-spacer></v-spacer>
    <v-menu bottom left :close-on-content-click="false" :y-offset="true">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-horizontal-circle-outline</v-icon>
        </v-btn>
      </template>

      <v-list>
        <!-- <v-list-item>
            <v-checkbox
              v-model="darkMode"
              color="secondary"
              label="Dark mode"
              class="mt-5"
              :mandatory="false"
            />
          </v-list-item> -->
        <v-list-item>
          <v-switch
            class="mx-auto"
            v-model="darkMode"
            secondary
            color="secondary"
            label="Dark mode"
            dense
          />
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  props: ["appName"],
  data() {
    return {
      showLogo: false,
      isScrolling: false,
    };
  },
  computed: {
    logo() {
      return this.$store.getters["settings/logoDarkMode"];
    },
    // showLogo() {
    //   return this.logo !== null && this.logo !== undefined;
    // },
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
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      this.showLogo = offset > 50;
    },
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
