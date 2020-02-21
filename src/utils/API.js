import axios from "axios";

export default axios.create({
  baseURL: "https://murmuring-stream-66778.herokuapp.com",
  responseType: "json"
});