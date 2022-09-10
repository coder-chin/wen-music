import axios from 'axios'

const baseURL = import.meta.env.VITE_API

const musicApi = axios.create({
  baseURL
})

musicApi.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, 'network error')
  }
)

export { musicApi, baseURL }
