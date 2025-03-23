import axios from 'axios'

const BASE_URL = "http://localhost:5222/api"

const createAxiosInstance = (basePath: string = "") => {
  const instance = axios.create({
    baseURL: `${BASE_URL}${basePath}`,
  })

  return instance
}

export const downloadAxios = createAxiosInstance("/download")
