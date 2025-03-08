import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3001",
});

export const api = {
  getDemos() {
    return axios.get("/demos");
  },
};
