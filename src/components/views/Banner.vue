<template>
  <Parallax
    src="https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    height="200"
  >
    <v-row justify="center" align="center">
      <v-col v-for="(name, index) in appName" :key="index" cols="auto">
        <div>
          <p
            class="banner-text text-center font-weight-bold text-uppercase text-sm-body-1"
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
<style lang="scss" scoped>
@media (min-width: 858px) {
  .banner-text {
    font-size: 120px;
  }
}

@media (min-width: 780px) {
  .banner-text {
    font-size: 110px;
  }
}

@media (min-width: 702px) {
  .banner-text {
    font-size: 100px;
  }
}

@media (min-width: 724px) {
  .banner-text {
    font-size: 19px;
  }
}

@media (max-width: 623px) {
  .banner-text {
    font-size: 18px;
  }
}
</style>
