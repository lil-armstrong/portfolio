import { Axios } from 'axios'
import { DEV_TO_API } from './constants'

const request = new Axios({
  baseURL: DEV_TO_API,
  responseType: 'json',
})
request.interceptors.request.use((requestConfig) => {
  return requestConfig
}, console.error)
request.interceptors.response.use((responseObject) => {
  return responseObject
}, console.error)
export default request
