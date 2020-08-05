<template>
  <ValidationProvider
    v-slot="{ errors }"
    :name="$attrs.name ? $attrs.name : name"
    :rules="$attrs.rules"
  >
    <v-text-field
      v-model="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      @click:append="showPassword = !showPassword"
      :error-messages="$attrs.errorMsg ? $attrs.errorMsg : errors"
      :success-messages="$attrs.successMsg ? $attrs.successMsg : successMsg"
      :success="$attrs.success ? $attrs.success : null"
      :label="$attrs.label ? $attrs.label : label"
      :counter="counter"
      required
    ></v-text-field>
  </ValidationProvider>
</template>
<script>
import { required } from "vee-validate/dist/rules";
import { extend, ValidationProvider, setInteractionMode } from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

export default {
  components: {
    ValidationProvider,
  },
  props: {
    passwordValue: String,
    default() {
      return "";
    },
  },
  data() {
    return {
      name: "Password",
      label: "Password",
      showPassword: false,
      successMsg: "",
    };
  },
  computed: {
    password: {
      get() {
        return this.passwordValue;
      },
      set(value) {
        this.$emit("update:passwordValue", value);
      },
    },
    counter() {
      if (
        this.$attrs.counter != null &&
        this.$attrs.counter != undefined &&
        this.$attrs.counter > this.password.length
      ) {
        return this.$attrs.counter;
      }
      return null;
    },
  },
  // methods: {
  //   changeHandler: function(password) {
  //     //$emit('update:passwordValue', password);
  //     this.$emit("interface", password); // handle data and give it back to parent by interface
  //   }
  // },
  // beforeMount() {
  //   this.password = this.passwordValue;
  // }
};
</script>
