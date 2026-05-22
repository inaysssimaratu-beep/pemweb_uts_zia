import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  error: string | null; // Untuk menampilkan pesan kalau NIM/Password salah
  isLoading: boolean;   // Untuk efek loading saat tombol diklik
  login: (nim: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      error: null,
      isLoading: false,

      // Mengubah login menjadi async agar bisa menunggu respon dari Backend
      login: async (nim: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          // SEKARANG KITA GABUNGKAN: Tembak ke Express Server lokal kamu
          // Sesuaikan '/api/login' dengan endpoint login asli di Express-mu
          const response = await axios.post("http://localhost:3000/api/login", {
            nim,
            password,
          });

          // Jika backend merespon sukses (Express mengembalikan nama user/NIM)
          if (response.status === 200 || response.status === 201) {
            set({ 
              isAuthenticated: true, 
              user: response.data.user || nim, // Ambil nama dari backend
              isLoading: false 
            });
            return true; // Berhasil login
          }
          return false;
        } catch (err: any) {
          // Jika NIM salah, Password salah, atau backend mati, dia lari ke sini
          const msg = err.response?.data?.message || "Koneksi ke backend gagal!";
          set({ 
            error: msg, 
            isLoading: false, 
            isAuthenticated: false 
          });
          return false; // Gagal login
        }
      },

      logout: () => 
        set({ 
          isAuthenticated: false, 
          user: null,
          error: null
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);