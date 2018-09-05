import axios from "axios";
import Api from "./Api";

class TalentCardApi extends Api {
  getOptions(type) {
    return axios.get(`${type}`);
  }

  getTopics(areaId) {
    return axios.get("motivation");
  }

  getCards(topicIds) {
    return axios.get("card");
  }

  postSelfReview(payload) {
    return axios.post("card", payload);
  }

  sendReportEmail(payload) {
    const payloadToSend = {
      email: payload.email,
      reportText: payload.text,
      hashId: payload.hashId,
    };

    return axios.post("card/email", payloadToSend);
  }
}

export default TalentCardApi;
