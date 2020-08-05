<template>
  <ValidationProvider
    v-slot="{ errors }"
    :name="$attrs.name ? $attrs.name : name"
    :rules="$attrs.rules"
  >
    <v-textarea
      v-model="text"
      :error-messages="errors"
      :label="$attrs.label ? $attrs.label : label"
      :counter="$attrs.counter ? $attrs.counter : counter"
      :success="$attrs.success ? $attrs.success: false"
      :required="$attrs.required ? $attrs.required: false"
    ></v-textarea>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider, setInteractionMode } from "vee-validate";

setInteractionMode("eager");

export default {
  name: "TextArea",
  components: {
    ValidationProvider
  },
  props: {
    textAreaValue: String,
    default() {
      return "";
    }
  },
  data: () => ({
    name: "Text Area",
    label: "Text Area",
    counter: null
  }),
  computed: {
    text: {
      get() {
        return this.textAreaValue;
      },
      set(value) {
        this.$emit("update:textAreaValue", value);
      }
    }
  }
};
</script>

<style scoped></style>
