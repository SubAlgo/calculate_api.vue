import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000
})

export const invoke = (url, param = {}) => {
   return http.post(url, param)
    .then((resp) => resp.data)
}