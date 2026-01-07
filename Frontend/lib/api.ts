import axios from "axios"

const api = axios.create({
  baseURL: "https://literate-trout-r4wv7579747cpxxq-5000.app.github.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
