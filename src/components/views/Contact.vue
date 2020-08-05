<template>
  <v-container id="container-login" max class="mx-auto">
    <v-row v-if="!loading">
      <v-col cols="12" xs="12">
        <v-card class="mx-auto pa-3">
          <ValidationObserver ref="observer">
            <form>
              <TextInput
                label="Subject"
                name="Subject"
                rules="required|min:2|max:100|alpha"
                :textValue.sync="formData.subject"
                :success="subjectValid"
              />
              <TextInput
                label="Message"
                name="Message"
                rules="required|min:2|max:5000|alpha"
                :textValue.sync="formData.message"
                :success="messageValid"
              />
              <EmailInput
                label="E-Mail"
                name="E-Mail"
                :emailValue.sync="formData.email"
              />
              <v-divider class="mb-4 mt-2" />
              <SubmitButton :click="submitForm" />
              <ClearButton :click="clearForm" />
            </form>
          </ValidationObserver>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, min, max, alpha } from "vee-validate/dist/rules";
import { ValidationObserver, extend, setInteractionMode } from "vee-validate";
import SubmitButton from "../buttons/SubmitButton";
import ClearButton from "../buttons/ClearButton";
import EmailInput from "../inputs/EmailInput";
import TextInput from "../inputs/TextInput";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("alpha", {
  ...alpha,
  message: "{_field_} can only contain alphabetic characters",
});

extend("min", {
  ...min,
  message: "{_field_} must contain at least {length} characters",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

const initFromData = {
  subject: "",
  message: "",
  email: "",
};

export default {
  name: "SignUp",
  components: {
    ValidationObserver,
    EmailInput,
    SubmitButton,
    ClearButton,
    TextInput,
  },
  data() {
    return {
      name: "Contact",
      formData: Object.assign({}, initFromData),
    };
  },
  computed: {
    loading: {
      get() {
        return this.$store.getters["loading/loading"];
      },
      set(value) {
        this.$store.dispatch("loading/setLoading", value);
      },
    },
    error: {
      get() {
        return this.$store.getters["error/error"];
      },
      set(value) {
        this.$store.dispatch("error/setError", value);
      },
    },
    subjectValid() {
      if (
        this.formData.subject.length >= 2 &&
        this.formData.subject.length <= 100
      ) {
        return true;
      }
      return false;
    },
    messageValid() {
      if (
        this.formData.message.length >= 2 &&
        this.formData.message.length <= 5000
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async submitForm() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        this.error =
          "Contact form does not meet requirements of the required fields.";

        return;
      }
      await this.onSubmit(this.formData);
    },
    clearForm() {
      this.formData = Object.assign({}, initFromData);
      this.$refs.observer.reset();
    },
    onSubmit(form) {
      this.$store.dispatch("contact/sendContactForm", form);
      // .then((res) => {
      //   if (res != null && res != undefined) {
      //     this.error = res.error.message;
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" scoped></style>
