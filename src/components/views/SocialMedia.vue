<template>
  <v-card>
    <v-row justify="center" align="center">
      <v-col cols="auto" v-for="(platform, index) in platforms" :key="index">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :icon="true"
              class="card-btn"
              x-large
              v-bind="attrs"
              v-on="on"
              v-on:click="openUrlInNewTab(platform.url)"
              :dark="darkMode"
            >
              <v-icon x-large>{{ platform.icon }}</v-icon>
            </v-btn>
          </template>
          <span>
            Open {{ platform.name }} in a new tab
            <br />
            ---->
            {{ platform.url }}
          </span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "SocialMedia",
  data() {
    return {
      platforms: [
        { name: "Facebook", url: "https://facebook.com", icon: "mdi-facebook" },
        { name: "Twitter", url: "https://twitter.com", icon: "mdi-twitter" },
        { name: "Github", url: "https://github.com", icon: "mdi-github" },
        { name: "Discord", url: "https://dischord.com", icon: "mdi-discord" },
        {
          name: "Instagram",
          url: "https://instagram.com",
          icon: "mdi-instagram",
        },
        {
          name: "Snapchat",
          url: "https://snapchat.com",
          icon: "mdi-snapchat",
        },
        {
          name: "Linkedin",
          url: "https://linkedin.com",
          icon: "mdi-linkedin",
        },
      ],
    };
  },
  computed: {
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
    openUrlInNewTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
.card-btn:hover {
  color: var(--v-primary-base);
}
</style>
