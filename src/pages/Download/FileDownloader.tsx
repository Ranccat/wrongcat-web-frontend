import { useState } from 'react'
import downloadService from '@/services/downloadService'

const FileDownloader = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  
  const downloadFile = async() => {
    setIsDownloading(true)

    await downloadService.downloadInstaller()

    setIsDownloading(false)
  }

  return (
    <div>
      <button onClick={downloadFile} disabled={isDownloading}>
        {isDownloading ? "Downloading..." : "Download File"}
      </button>
    </div>
  )
}

export default FileDownloader
