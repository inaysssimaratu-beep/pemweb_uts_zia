import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../component/ui/Input";            

// Definisikan tipe data kategori dari database cloud kamu
interface Category {
  id: number;
  name: string;
}

const eventSchema = z.object({
  name: z.string().min(3, "Nama event minimal 3 karakter"),
  category: z.string().min(1, "Kategori wajib dipilih"), // Menampung ID kategori pilihan berupa string angka
  date: z.string().min(1, "Tanggal wajib diisi"),
  location: z.string().min(3, "Lokasi minimal 3 karakter"),
  description: z.string().min(5, "Deskripsi minimal 5 karakter"),
});

type EventFormData = z.infer<typeof eventSchema>;

export default function EventCreate() {
  const navigate = useNavigate();
  const [dbCategories, setDbCategories] = useState<Category[]>([]);
  const [loadingCats, setLoadingCats] = useState(true);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  // 1. AMBIL DAFTAR KATEGORI LIVE DARI SUPABASE UNTUK ISI DROPDOWN - MENGGUNAKAN .ENV
  useEffect(() => {
    const fetchLiveCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
        setDbCategories(response.data);
      } catch (error) {
        console.error("Gagal memuat kategori database:", error);
      } finally {
        setLoadingCats(false);
      }
    };
    fetchLiveCategories();
  }, []);

  // 2. FUNGSI SUBMIT DENGAN ID KATEGORI DINAMIS YANG VALID - MENGGUNAKAN .ENV
  const onSubmit = async (data: EventFormData) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/events`, {
        name: data.name,
        categoryId: Number(data.category), // Mengambil ID kategori riil hasil pilihan dropdown user
        location: data.location,
        dateEvent: data.date, 
        description: data.description,
      });

      alert("Event baru berhasil disimpan ke database cloud!");
      navigate("/dashboard/event"); // Balik ke halaman utama tabel event setelah sukses
    } catch (error) {
      console.error("Gagal menyimpan event:", error);
      alert("Terjadi kesalahan saat menyimpan data event.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1a0a10]">Tambah Event</h1>
        <p className="text-sm text-gray-500 mt-1">Lengkapi data untuk membuat event baru.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        
        {/* Nama Event */}
        <Input
          label="Nama Event"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Contoh: Invofest 2026"
        />

        {/* Kategori - Sekarang Isinya Diambil Otomatis dari Database */}
        <div className="flex flex-col mb-4">
          <label className="font-semibold mb-1 text-gray-700">Kategori</label>
          <select 
            {...register("category")} 
            className={`border p-2 rounded outline-none transition focus:ring-2 focus:ring-[#7B1D3F] ${
              errors.category ? "border-red-500" : "border-gray-300"
            }`}
            disabled={loadingCats}
          >
            <option value="">{loadingCats ? "-- Memuat Kategori Cloud... --" : "-- Pilih Kategori --"}</option>
            {dbCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-xs mt-1 font-medium">{errors.category.message}</p>}
        </div>

        {/* Tanggal */}
        <Input
          label="Tanggal Event"
          name="date"
          type="date"
          register={register}
          error={errors.date?.message}
        />

        {/* Lokasi */}
        <Input
          label="Lokasi"
          name="location"
          register={register}
          error={errors.location?.message}
          placeholder="Lokasi pelaksanaan"
        />

        {/* Deskripsi */}
        <Input
          label="Deskripsi Event"
          name="description"
          register={register}
          error={errors.description?.message}
          placeholder="Jelaskan detail event..."
        />

        {/* Tombol Maroon */}
        <button
          type="submit"
          className="bg-[#7B1D3F] text-white py-3 rounded-xl hover:bg-[#5a1530] transition-colors font-bold mt-4 shadow-md text-sm tracking-wide"
        >
          Simpan Event
        </button>
      </form>
    </div>
  );
}