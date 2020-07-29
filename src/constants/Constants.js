import Logo_darkMode from "../assets/Logo_DarkMode.png";
import Logo_default from "../assets/Logo_Default.png";

export default {
  APPLICATION: {
    NAME: process.env.VUE_APP_name || "empty",
    COLOR: process.env.VUE_APP_color || "",
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
  UTILS: {
    hexToRgb(hex) {
      var c;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return (
          "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)"
        );
      }
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  FIREBASE: {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY || "empty",
    authDomain:
      process.env.VUE_APP_FIREBASE_AUTH_DOMAIN + ".firebaseapp.com" || "empty",
    databaseURL: process.env.VUE_APP_FIREBASE_DB_URL || "empty",
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || "empty",
    storageBucket:
      process.env.VUE_APP_FIREBASE_STORAGE_BUCKET + ".appspot.com" || "empty",
  },
  GITHUB: {
    user: process.env.VUE_APP_GITHUB_USER || "empty",
    repo: process.env.VUE_APP_GITHUB_REPO || "empty",
    description: "",

    GET_API_REPO_URL() {
      if (this.user !== "empty" && this.repo !== "empty") {
        return "https://api.github.com/repos/" + this.user + "/" + this.repo;
      } else {
        return null;
      }
    },
    GET_API_COMMITS_URL() {
      if (this.user !== "empty" && this.repo !== "empty") {
        let url = this.GET_API_REPO_URL() + "/commits";
        return url;
      } else {
        return null;
      }
    },
    GET_USER_URL() {
      if (this.user !== "empty") {
        let url = "https://github.com/" + this.user;
        return url;
      } else {
        return null;
      }
    },
    GET_REPO_URL() {
      if (this.repo !== "empty") {
        let url = this.GET_USER_URL() + "/" + this.repo;
        return url;
      } else {
        return null;
      }
    },
  },
};
