import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import MainPage from '@/pages/Main/MainPage'
import LoginPage from '@/pages/Auth/LoginPage'

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
      // other pages
    ],
  },
])

export default router
