<template>
  <Parallax
    src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    height="200"
  >
    <v-row justify="center" align="center">
      <v-col v-for="(name, index) in appName" :key="index" cols="auto">
        <div>
          <p
            class="text-center font-weight-bold text-uppercase text-sm-body-1"
            style="font-size: 55px;"
          >
            {{ name }}
          </p>
        </div>
      </v-col>
    </v-row>
  </Parallax>
</template>
<script>
import Parallax from "../base/Parallax";
export default {
  name: "Banner",
  components: {
    Parallax,
  },
  computed: {
    appName() {
      return this.$store.getters["settings/appName"];
    },
  },
};
</script>
