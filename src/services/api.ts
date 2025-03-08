import Axios from "axios";
import { GetDemosListResponseType } from "./responseTypes/GetDemosListResponseType";
import { GetFramesByDemoIdResponseType } from "./responseTypes/GetFramesByDemoIdResponseType";

const axios = Axios.create({
  baseURL: "http://localhost:3001",
});

export const api = {
  getDemosList() {
    return axios.get<GetDemosListResponseType>("/demos");
  },
  getFramesByDemoId(demoId: string) {
    const safeId = encodeURIComponent(demoId);
    return axios.get<GetFramesByDemoIdResponseType>(`/frames/demo/${safeId}`);
  },
};
