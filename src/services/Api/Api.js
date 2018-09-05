import axios from "axios";
import config from "config";

class Api {
  constructor(apiSwitch) {
    axios.defaults.baseURL = apiSwitch
      ? config.talentApiUrl
      : config.apiUrl;
    console.log("CONFIG IS", config);
    console.log("DEPLOY_ENV", DEPLOY_ENV);
    console.log("axios.defaults.baseURL", axios.defaults.baseURL);
  }
}

export default Api;
