<template>
  <v-parallax :src="src" :height="$attrs.height">
    <slot></slot>
  </v-parallax>
</template>
<script>
export default {
  name: "Parallax",
  props: ["src"],
};
</script>
