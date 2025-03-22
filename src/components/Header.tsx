import { KeyRound, CircleUserRound } from 'lucide-react'
import useNavigation from '@/hooks/useNavigation'
import useUserStore from '@/stores/userStore'

const Header = () => {
  const { goToMain, goToLogin, goToDashboard } = useNavigation()
  const { isLoggedIn } = useUserStore()

  return (
    <header className="w-full h-24 py-4 px-8 flex justify-between">
      <button onClick={goToMain}>
        LOGO
      </button>

      <div className="flex gap-x-8">
        <button className="font-bold">
          About
        </button>
        <button className="font-bold">
          Games
        </button>
        <button className="font-bold">
          Download
        </button>
        <button className="ml-6" onClick={isLoggedIn ? goToLogin : goToDashboard}>
          {isLoggedIn ? <KeyRound /> : <CircleUserRound />}
        </button>
      </div>
    </header>
  )
}

export default Header
