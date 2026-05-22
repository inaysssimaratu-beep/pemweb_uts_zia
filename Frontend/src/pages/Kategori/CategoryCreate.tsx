import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../component/ui/Input"; 

const categorySchema = z.object({
  name: z.string().min(3, "Nama kategori minimal 3 karakter"),
});

type CategoryFormData = z.infer<typeof categorySchema>;

export default function CategoryCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
  });

  // FUNGSI SUBMIT REAL UNTUK MENYIMPAN DATA KATEGORI KE DATABASE CLOUD (POST) - MEMBACA .ENV
  const onSubmit = async (data: CategoryFormData) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/categories`, {
        name: data.name
      });

      alert("Kategori baru berhasil disimpan ke database cloud!");
      navigate("/dashboard/category"); // Otomatis balik ke halaman tabel kategori setelah sukses
    } catch (error) {
      console.error("Gagal menyimpan kategori:", error);
      alert("Terjadi kesalahan saat menyimpan data kategori.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow bg-white">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2 text-[#1a0a10]">Tambah Kategori Event</h1>
      <p className="text-sm text-gray-500 mb-6">
        Digunakan untuk mengelompokkan event seperti Seminar, Workshop, dll.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        
        {/* Nama Kategori */}
        <Input
          label="Nama Kategori"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Contoh: Seminar"
        />

        {/* Button Maroon Sesuai Tema Invofest */}
        <button
          type="submit"
          className="bg-[#7B1D3F] text-white py-3 rounded-xl hover:bg-[#5a1530] transition-colors font-bold mt-4 shadow-md text-sm tracking-wide"
        >
          Simpan Kategori
        </button>
      </form>
    </div>
  );
}