import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../component/ui/Input";

const pembicaraSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  job: z.string().min(3, "Pekerjaan/Role minimal 3 karakter"),
  // Menggunakan default gambar atau opsional jika tidak diisi pembicara
  photo: z.string().default("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"),
});

type PembicaraFormData = z.infer<typeof pembicaraSchema>;

export default function PembicaraCreate() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PembicaraFormData>({
    resolver: zodResolver(pembicaraSchema),
  });

  // FUNGSI SUBMIT UNTUK MENYIMPAN DATA REAL KE BACKEND (POST) - MEMBACA .ENV
  const onSubmit = async (data: PembicaraFormData) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/pembicara`, {
        name: data.name,
        role: data.job, // Di backend kolomnya bernama 'role'
        image: data.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      });

      alert("Pembicara berhasil disimpan ke database cloud!");
      navigate("/dashboard/pembicara"); // Otomatis balik ke halaman tabel setelah sukses
    } catch (error) {
      console.error("Gagal menyimpan pembicara:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1a0a10]">Tambah Pembicara</h1>
        <p className="text-sm text-gray-500 mt-1">Masukkan informasi lengkap pembicara event.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        
        <Input
          label="Nama Lengkap"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Contoh: Inays Imaratu"
        />

        <Input
          label="Pekerjaan / Instansi"
          name="job"
          register={register}
          error={errors.job?.message}
          placeholder="Contoh: UI/UX Designer"
        />

        <Input
          label="URL Foto (Opsional)"
          name="photo"
          register={register}
          error={errors.photo?.message}
          placeholder="https://link-foto.com/gambar.jpg"
        />

        <button
          type="submit"
          className="bg-[#7B1D3F] text-white py-3 rounded-xl hover:bg-[#5a1530] transition-colors font-bold mt-4 shadow-md text-sm tracking-wide"
        >
          Simpan Pembicara
        </button>
      </form>
    </div>
  );
}