import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  error: string | null;
  isLoading: boolean;
  login: (nim: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const API_URL = import.meta.env.VITE_API_URL;

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      error: null,
      isLoading: false,

      login: async (nim: string, password: string) => {
        set({ isLoading: true, error: null });

        try {
          const response = await axios.post(`${API_URL}/api/login`, {
            nim,
            password,
          });

          if (response.status === 200 || response.status === 201) {
            set({
              isAuthenticated: true,
              user: response.data.user || nim,
              isLoading: false,
            });
            return true;
          }

          set({ isLoading: false });
          return false;
        } catch (err: any) {
          const msg =
            err.response?.data?.message || "Koneksi ke backend gagal!";

          set({
            error: msg,
            isLoading: false,
            isAuthenticated: false,
          });

          return false;
        }
      },

      logout: () =>
        set({
          isAuthenticated: false,
          user: null,
          error: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);