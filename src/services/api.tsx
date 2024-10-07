import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://elevii-lp-api.andersudev.workers.dev/api/',
  headers: {
    "Content-Type": "text/plain",
  }
})