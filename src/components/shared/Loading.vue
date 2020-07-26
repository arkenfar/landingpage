<template>
  <v-progress-circular
    :indeterminate="$attrs.indeterminate ? $attrs.indeterminate : indeterminate"
    :value="$attrs.value ? $attrs.value : value"
    :size="$attrs.size ? $attrs.size : size"
    :color="$attrs.color ? $attrs.color : color"
    :class="$attrs.class"
  ></v-progress-circular>
</template>
<script>
export default {
  name: "Loading",
  data() {
    return {
      size: 500,
      value: 25,
      color: "secondary",
      indeterminate: true,
    };
  },
};
</script>
