<template>
  <ValidationProvider
    v-slot="{ errors }"
    :name="$attrs.name ? $attrs.name : name"
    rules="required|email"
  >
    <v-text-field
      v-model="email"
      :error-messages="errors"
      :label="$attrs.label ? $attrs.label : label"
      :success="email ? true: false"
      required
    ></v-text-field>
  </ValidationProvider>
</template>
<script>
import { required, email } from "vee-validate/dist/rules";
import { extend, ValidationProvider, setInteractionMode } from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});

export default {
  components: {
    ValidationProvider
  },
  props: {
    emailValue: String,
    default() {
      return "";
    }
  },
  data: () => ({
    name: "E-Mail",
    label: "E-Mail"
  }),
  computed: {
    email: {
      get() {
        return this.emailValue;
      },
      set(value) {
        this.$emit("update:emailValue", value);
      }
    }
  }
};
</script>

<style scoped></style>
