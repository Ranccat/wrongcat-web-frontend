import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserProps {
  token: string | null
  isLoggedIn: boolean
  login: (token: string) => void
  logout: () => void
}

const useUserStore = create<UserProps>()(
  persist(
    (set) => ({
      token: null,
      isLoggedIn: false,
      login: (token) => set({ token: token, isLoggedIn: true}),
      logout: () => set({ token: null, isLoggedIn: false }),
    }),
    {
      name: 'user-storage',
    }
  )
)

export default useUserStore
