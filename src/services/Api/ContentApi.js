import axios from "axios";
import Api from "./Api";

class ContentApi extends Api {
  getPage(pageName) {
    return axios.get(`page/${pageName}`);
  }
}

export default ContentApi;
