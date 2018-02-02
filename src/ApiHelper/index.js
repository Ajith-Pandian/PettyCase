import Api from "./Api";
import { BASE_URL, CASE_IDS as caseIds } from "../Constants";

const singleCaseUrl = caseId =>
  `${BASE_URL}/smallcases/smallcase?scid=${caseId}`;

const historicalDataUrl = caseId =>
  `${BASE_URL}/smallcases/historical?scid=${caseId}`;

const imageUrl = (caseId, size) =>
  `https://www.smallcase.com/images/smallcases/187/${caseId}.png`;

export default class ApiHelper {
  static getCase(id) {
    return Api.get(singleCaseUrl(id)).then(res => {
      console.log(res);
      return res;
    });
  }
  static getImageUrl(caseId, size) {
    return imageUrl(caseId, size);
  }
}
