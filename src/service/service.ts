import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { TIME_OUT, BASE_URL } from './config'

type GetConfig = Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>
type PostConfig = Omit<AxiosRequestConfig, 'url' | 'data' | 'method'>
type DeleteConfig = Omit<AxiosRequestConfig, 'params'>
type PatchConfig = Omit<AxiosRequestConfig, 'url' | 'data'>

export class Http {
  instance: AxiosInstance
  constructor(baseURL: string, TIME_OUT: number) {
    this.instance = axios.create({
      baseURL,
      timeout: TIME_OUT
    })
  }
  get<R = unknown>(url: string, query?: Record<string, JSONValue>, config?: GetConfig) {
    return this.instance.request<R>({ ...config, url: url, params: query, method: 'GET' })
  }
  post<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PostConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'post' })
  }
  patch<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PatchConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'patch' })
  }
  delete<R = unknown>(url: string, query?: Record<string, string>, config?: DeleteConfig) {
    return this.instance.request<R>({ ...config, url: url, params: query, method: 'delete' })
  }
}

export const http = new Http(BASE_URL, TIME_OUT)

http.instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    return error.response
  }
)

http.instance.interceptors.request.use((config) => {
  // config.headers!.xhrFields = { withCredentials: true }

  return config
})
