<template>
  <ValidationProvider
    v-slot="{ errors }"
    :name="$attrs.name ? $attrs.name : name"
    :rules="$attrs.rules"
  >
    <v-text-field
      v-model="text"
      :error-messages="errors"
      :label="$attrs.label ? $attrs.label : label"
      :counter="$attrs.counter ? $attrs.counter : counter"
      :success="$attrs.success ? $attrs.success : false"
      :solo="$attrs.solo ? $attrs.solo : false"
      :clearable="$attrs.clearable ? $attrs.clearable : false"
      :single-line="$attrs.singleLine ? $attrs.singleLine : false"
      :flat="$attrs.flat ? $attrs.flat : false"
      :color="$attrs.color ? $attrs.color : ''"
      :solo-inverted="$attrs.soloInverted ? $attrs.soloInverted : false"
      :background-color="$attrs.backgroundColor ? $attrs.backgroundColor : ''"
      required
    ></v-text-field>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider, setInteractionMode } from "vee-validate";

setInteractionMode("eager");

export default {
  name: "TextInput",
  components: {
    ValidationProvider,
  },
  props: {
    textValue: String,
    default() {
      return "";
    },
  },
  data: () => ({
    name: "Text Input",
    label: "Text Input",
    counter: null,
  }),
  computed: {
    text: {
      get() {
        return this.textValue;
      },
      set(value) {
        this.$emit("update:textValue", value);
      },
    },
  },
};
</script>

<style scoped></style>
