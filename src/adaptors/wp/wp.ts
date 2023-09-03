import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export type RequestConfig = Pick<AxiosRequestConfig, 'headers' | 'params' | 'timeout'>

export class WPAdaptor {
    endpoint = "https://dataturk.ai/wp-json/wp/v2"
    client: AxiosInstance

    constructor() {
       this.client = axios.create({
            baseURL: this.endpoint,
            timeout: 1000,
            headers: {'X-Client': 'astro'}
       }) 
    }

    async get<T = unknown>(path: string, config?: RequestConfig) {
      const response = await this.client.get<T>(path)

      return response.data
    }
    
    async post<T = unknown, D = Record<string, any>>(path: string, data?: D, config?: RequestConfig) {
      const response = await this.client.post<T>(path, data, config)

      return response.data
    }
    
    async put<T = unknown, D = Record<string, any>>(path: string, data?: D, config?: RequestConfig) {
      const response = await this.client.put<T>(path, data, config)

      return response.data
    }

    async delete<T = unknown>(path: string, config?: RequestConfig) {
      const response = await this.client.delete<T>(path, config)

      return response.data
    }
}