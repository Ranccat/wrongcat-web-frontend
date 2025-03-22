import { useState } from 'react'

const FileDownloader = () => {
  const [status, setStatus] = useState("Waiting for download...")
  const [progress, setProgress] = useState(0)
  const [fileName, setFileName] = useState("")
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadFile = () => {
    setStatus("Connecting to server...")
    setProgress(0)
    setIsDownloading(true)

    const socket = new WebSocket("https://localhost:5222/api/get-installer")
    const receivedChunks: ArrayBuffer[] = []
    let totalChunks = 1

    socket.onopen = () => {
      setStatus("Connected. Waiting for the file...")
    }

    socket.onmessage = (event: MessageEvent) => {
      if (typeof event.data === "string") {
        try {
          const metadata = JSON.parse(event.data)
          setFileName(metadata.fileName)
          totalChunks = metadata.totalChunks
          setStatus(`Downloading ${metadata.fileName}...`)
        } catch (error) {
          // TODO alert error
          setStatus(`Error parsing metadata ${error}`)
          socket.close()
        }
      } else {
        const reader = new FileReader()
        reader.onload = () => {
          if (reader.result instanceof ArrayBuffer) {
            const arrayBuffer = reader.result
            const dataView = new DataView(arrayBuffer)

            const chunkIndex = dataView.getUint32(0, true)
            const chunkData = arrayBuffer.slice(4)

            receivedChunks[chunkIndex] = chunkData

            setProgress(((chunkIndex + 1) / totalChunks) * 100)
          }
        }

        reader.readAsArrayBuffer(event.data)
      }
    }

    socket.onclose = () => {
      setStatus("Download complete! Saving file...")
      setIsDownloading(false)

      const blob = new Blob(receivedChunks, { type: "application/octet-stream" })

      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = fileName || "downloaded_file"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    socket.onerror = (error) => {
      // TODO alert error
      setStatus("Error: " + error)
      setIsDownloading(false)
    }
  }

  return (
    // TODO split component
    <div>
      <p>{status}</p>
      <progress value={progress} max={100}></progress>
      <p>{progress.toFixed(2)}%</p>
      <button onClick={downloadFile} disabled={isDownloading}>
        {isDownloading ? "Downloading..." : "Download File"}
      </button>
    </div>
  )
}

export default FileDownloader
