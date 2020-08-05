<template>
  <v-btn
    :class="$attrs.class ? $attrs.class : btnclass"
    @click="$attrs.click"
    :color="$attrs.color ? $attrs.color  : color"
  >{{$attrs.label ? $attrs.label : label}}</v-btn>
</template>
<script>
export default {
  name: "SubmitButton",
  data() {
    return {
      label: "Submit",
      color: "success",
      btnclass: "mr-4"
    };
  },
  methods: {
    onClickButton(event) {
      this.$emit("clicked", event);
    }
  }
};
</script>

<style scoped></style>