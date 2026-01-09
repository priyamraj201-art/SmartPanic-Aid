import axios from "axios";

const api = axios.create({
  baseURL: "https://iterate-trout-r4wv7579747cpxxq-5000.app.github.dev/api",
});

export default api;
