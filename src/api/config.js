import axios from 'axios'

const baseURL = 'https://wen-music.vercel.app'

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
