import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.cyan.lighten4,
        secondary: colors.blueGrey.darken2,
        accent: "#43A047",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        error: colors.red.darken2,
      },
      dark: {
        primary: colors.grey.darken4,
        secondary: colors.deepOrange.darken3,
        accent: "#43A047",
        info: "#2196F3",
        success: colors.green.darken3,
        warning: "#FFC107",
        error: colors.red.darken3,
      },
    },
    options: {
      customProperties: true,
    },
  },
});
