import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import MainPage from '@/pages/Main/MainPage'
import LoginPage from '@/pages/Auth/LoginPage'
import DownloadPage from '@/pages/Download/DownloadPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'download',
        element: <DownloadPage />,
      },
    ],
  },
])

export default router
