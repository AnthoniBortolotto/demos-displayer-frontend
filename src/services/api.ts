import Axios from "axios";
import { GetDemosListResponseType } from "./responseTypes/GetDemosListResponseType";

const axios = Axios.create({
  baseURL: "http://localhost:3001",
});

export const api = {
  getDemosList() {
    return axios.get<GetDemosListResponseType>("/demos");
  },
};
