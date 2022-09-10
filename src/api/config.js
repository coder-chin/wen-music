import axios from 'axios'

const baseURL = 'https://music-api.imchin.top'

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
