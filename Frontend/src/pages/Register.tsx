import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = z
  .object({
    username: z.string().min(2, "Username harus diisi").max(100),
    email: z.string().email("Format email tidak valid").min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal harus 8 karakter"),
    confirmPassword: z.string().min(8, "Konfirmasi password minimal 8 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      localStorage.setItem(
        "registeredUser",
        JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        })
      );

      alert("Akun Berhasil Dibuat! Silahkan Login.");
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="w-full">
      <div className="mb-8 rounded-[28px] bg-gradient-to-br from-[#7B1D3F] to-[#b84b72] px-7 py-8 text-white shadow-lg">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80 mb-3">
          INVOFEST 2025
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold">
          Daftar Akun
        </h1>

        <p className="text-white/80 mt-3 text-sm leading-relaxed">
          Buat akun baru untuk bergabung dan mengakses dashboard event.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-5 bg-white rounded-[28px] border border-[#7B1D3F]/10 shadow-md p-6"
        noValidate
      >
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Username
          </label>
          <input
            {...register("username")}
            disabled={isLoading}
            className={`w-full px-4 py-3 border rounded-2xl outline-none transition-all placeholder:text-slate-300 ${
              errors.username
                ? "border-red-500 bg-red-50"
                : "border-slate-200 focus:border-[#7B1D3F] focus:bg-[#fff8fb]"
            }`}
            placeholder="Masukkan username"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1 pl-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            disabled={isLoading}
            className={`w-full px-4 py-3 border rounded-2xl outline-none transition-all placeholder:text-slate-300 ${
              errors.email
                ? "border-red-500 bg-red-50"
                : "border-slate-200 focus:border-[#7B1D3F] focus:bg-[#fff8fb]"
            }`}
            placeholder="email@anda.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 pl-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              disabled={isLoading}
              className={`w-full px-4 py-3 border rounded-2xl outline-none transition-all placeholder:text-slate-300 ${
                errors.password
                  ? "border-red-500 bg-red-50"
                  : "border-slate-200 focus:border-[#7B1D3F] focus:bg-[#fff8fb]"
              }`}
              placeholder="Minimal 8 karakter"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 pl-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Konfirmasi
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              disabled={isLoading}
              className={`w-full px-4 py-3 border rounded-2xl outline-none transition-all placeholder:text-slate-300 ${
                errors.confirmPassword
                  ? "border-red-500 bg-red-50"
                  : "border-slate-200 focus:border-[#7B1D3F] focus:bg-[#fff8fb]"
              }`}
              placeholder="Ulangi password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1 pl-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#7B1D3F] text-white py-4 rounded-full font-bold hover:bg-[#5a1530] hover:scale-[1.01] flex items-center justify-center gap-2 transition-all shadow-md disabled:bg-slate-300 disabled:hover:scale-100 mt-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Memproses...
            </>
          ) : (
            "Daftar Sekarang"
          )}
        </button>

        <div className="text-sm text-center text-slate-500 pt-2">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="text-[#7B1D3F] font-extrabold hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}