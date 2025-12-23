import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      login: (userData, token) =>
        set({ user: userData, token, isLoggedIn: true }),
      logout: () => set({ user: null, token: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage', 
    }
  )
);

export default useAuthStore;
