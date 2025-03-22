import { useNavigate } from 'react-router-dom'

const useNavigation = () => {
  const navigate = useNavigate()

  return {
    goToMain: () => navigate('/'),
    goToLogin: () => navigate('/login'),
    goToRegister: () => navigate('/register'),
    goToDashboard: () => navigate('/dashboard'),
  }
}

export default useNavigation