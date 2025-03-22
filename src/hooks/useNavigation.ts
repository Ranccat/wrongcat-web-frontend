import { useNavigate } from 'react-router-dom'

const useNavigation = () => {
  const navigate = useNavigate()

  return {
    goToMain: () => navigate('/'),
    goToLogin: () => navigate('/login'),
    goToRegister: () => navigate('/register'),
    goToDashboard: () => navigate('/dashboard'),
    goToDownload: () => navigate('/download'),
  }
}

export default useNavigation