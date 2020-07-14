import Logo_darkMode from "../assets/Logo_DarkMode.png";
import Logo_default from "../assets/Logo_Default.png";

export default {
  APPLICATION: {
    NAME: process.env.VUE_APP_name || "empty",
    LOGO: Logo_default,
    LOGO_DARK_MODE: Logo_darkMode,
    TBA_DATE: process.env.VUE_APP_tbaDate || "2020-07-15",
    PROJECT_CREATED_DATE:
      process.env.VUE_APP_projectCreatedDate || "2020-07-12",
    DARKMODE: process.env.VUE_APP_DarkMode || true,

    USE_FIREBASE() {
      if (process.env.VUE_APP_useFirebase === "true") {
        return true;
      } else {
        return false;
      }
    },
    GET_APP_NAME() {
      return this.NAME.toUpperCase();
    },
    GET_TBA_DATE() {
      return new Date(this.TBA_DATE);
    },
    GET_PROJECT_CREATED_DATE() {
      return new Date(this.PROJECT_CREATED_DATE);
    },
  },
  COPYRIGHTS: {
    OWNER: process.env.VUE_APP_owner || "empty",
    YEAR: new Date().getFullYear(),
    GET_COPYRIGHTS() {
      return (
        this.OWNER.toString() +
        " \u00A9 " +
        this.YEAR.toString() +
        " All Rights Reserved"
      );
    },
  },
  FIREBASE: {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY || "empty",
    authDomain:
      process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com" || "empty",
    databaseURL: process.env.VUE_APP_FIREBASE_DB_URL || "empty",
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || "empty",
    storageBucket:
      process.env.VUE_APP_FIREBASE_STORAGE_BUCKET + ".appspot.com" || "empty",
  },
};
