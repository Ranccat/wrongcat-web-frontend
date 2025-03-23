import { downloadAxios } from '@/api/axiosConfig'

const downloadService = {
  downloadInstaller: async (): Promise<void> => {
    try {
      const response = await downloadAxios({
        method: 'get',
        url: '/installer',
        responseType: 'blob'
      })
      
      const href = URL.createObjectURL(response.data)
      const link = document.createElement('a')
      link.href = href
      link.setAttribute('download', 'pepe.jpg')
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      URL.revokeObjectURL(href)
    } catch (error) {
      alert(`error: ${error}`)
      throw new Error(`Unexpected error ${error}`)
    }
  }
}

export default downloadService
