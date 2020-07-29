<template>
  <v-row>
    <v-col cols="auto">
      <v-parallax :height="$attrs.height" :width="$attrs.width">
        <slot></slot>
      </v-parallax>
    </v-col>
  </v-row>
</template>
<script>
import Bubble1 from "./Bubble1";
import Parallax from "./Parallax";
export default {
  name: "ParaRow",
  props: ["ParaRow"],
  components: { Parallax, Bubble1 },
  data() {
    return {};
  },
};
</script>
