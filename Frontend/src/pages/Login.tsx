import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import Input from "../component/ui/Input";

// 1. Tipe data menggunakan NIM sesuai ketentuan soal
type FormData = {
  nim: string;
  password: string;
};

// 2. Validasi Zod disesuaikan untuk NIM dan Password
const schema = z.object({
  nim: z.string().min(1, "NIM harus diisi"),
  password: z.string().min(8, "Password minimal harus 8 karakter"),
});

export default function Login() {
  const navigate = useNavigate();
  
  // 3. Mengambil state login dari Zustand store baru
  const { login, error: apiError, isLoading } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // 4. Fungsi submit yang menembak API Backend Express
  const onSubmit = async (data: FormData) => {
    const success = await login(data.nim, data.password);

    if (success) {
      navigate("/dashboard"); // Pindah ke dashboard jika data di DB cocok
    }
  };

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="mb-8 rounded-[28px] bg-gradient-to-br from-[#7B1D3F] to-[#b84b72] px-7 py-8 text-white shadow-lg">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80 mb-3">
          INVOFEST 2025
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold">
          Login Akun
        </h1>

        <p className="text-white/80 mt-3 text-sm leading-relaxed">
          Masuk untuk mengakses dashboard dan melanjutkan aktivitas event.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-5 bg-white rounded-[28px] border border-[#7B1D3F]/10 shadow-md p-6"
        noValidate
      >
        {/* Notifikasi jika ada kesalahan akun dari backend Express */}
        {apiError && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-semibold text-center">
            {apiError}
          </div>
        )}

        {/* INPUT NIM */}
        <Input
          label="NIM"
          name="nim"
          register={register}
          error={errors.nim?.message}
          placeholder="Masukkan NIM Anda"
        />

        {/* INPUT PASSWORD */}
        <Input
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
          placeholder="Masukkan password"
        />

        {/* BUTTON ACTIONS */}
        <div className="pt-3 flex flex-col gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#7B1D3F] text-white py-4 rounded-full font-bold hover:bg-[#5a1530] hover:scale-[1.01] transition-all disabled:bg-gray-300 disabled:hover:scale-100 shadow-md"
          >
            {isLoading ? "Memproses..." : "Login Sekarang"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-[#fff3f7] text-[#7B1D3F] py-4 rounded-full font-bold border border-[#7B1D3F]/20 hover:bg-[#fce8ef] transition-all"
          >
            Kembali ke Beranda
          </button>
        </div>

        {/* DEMO LOGIN (Sudah diperbarui menggunakan NIM & Password) */}
        <div className="text-center text-xs text-slate-500 leading-relaxed pt-1">
          <p className="font-bold text-[#7B1D3F] mb-1">
            Demo Login
          </p>

          <p>
            NIM:{" "}
            <span className="font-semibold">
              24090010
            </span>
          </p>

          <p>
            Password:{" "}
            <span className="font-semibold">
              qwerty123
            </span>
          </p>
        </div>

        {/* REGISTER */}
        <div className="text-sm text-center text-slate-500 pt-2">
          Belum punya akun?{" "}
          <Link
            to="/register"
            className="text-[#7B1D3F] font-extrabold hover:underline"
          >
            Daftar di sini
          </Link>
        </div>
      </form>
    </div>
  );
}