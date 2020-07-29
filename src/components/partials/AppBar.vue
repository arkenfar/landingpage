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
    <v-menu
      bottom
      left
      :close-on-content-click="false"
      :y-offset="true"
      v-model="menuOpen"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="menu-btn" v-bind="attrs" v-on="on" :icon="true">
          <v-icon>mdi-dots-horizontal-circle-outline</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-switch
            class="mx-auto"
            v-model="darkMode"
            primary
            color="primary"
            label="Dark mode"
            dense
          />
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-color-picker class="ma-2" v-model="color"></v-color-picker>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-card-text class="primary text-center">{{
            color ? color.hex : ""
          }}</v-card-text>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-row justify="center">
            <v-btn color="success" class="mr-3" icon @click="save()"
              ><v-icon>mdi-check-outline</v-icon></v-btn
            >
            <v-btn color="error" icon @click="cancel()"
              ><v-icon>mdi-close-circle-outline</v-icon></v-btn
            ></v-row
          >
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
      color: undefined,
      menuOpen: false,
    };
  },
  computed: {
    logo() {
      return this.$store.getters["settings/logoDarkMode"];
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
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 80;
      this.showLogo = offset > 80;
    },
    setColor(color) {
      console.log("set color", color);
      this.$store.dispatch("settings/color", color);
    },
    setDarkMode() {
      this.$store.dispatch("settings/darkMode");
    },
    save() {
      console.log("saving", this.color);
      this.setColor(this.color);
      this.menuOpen = false;
    },
    cancel() {
      console.log("canceling");
      this.color = undefined;
      this.menuOpen = false;
    },
  },
  mounted() {
    let x = this.darkMode;
    this.darkMode = x;
  },
};
</script>

<style lang="scss" scoped>
#menu-btn:hover {
  color: var(--v-primary-base);
}
</style>
