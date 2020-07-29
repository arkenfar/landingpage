<template>
  <v-btn
    :class="$attrs.class ? $attrs.class : btnclass"
    @click="$attrs.click"
    :color="$attrs.color ? $attrs.color  : color"
  >{{$attrs.label ? $attrs.label : label}}</v-btn>
</template>
<script>
export default {
  name: "ClearButton",
  data() {
    return {
      label: "Clear",
      color: "error",
      btnclass: "mr-4"
    };
  }
};
</script>

<style scoped></style>