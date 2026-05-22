import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type Category = {
  id: number;
  name: string;
};

const TABLE_HEADERS = ["No", "Nama Kategori", "Aksi"];

export default function CategoryIndex() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // State untuk kontrol Modal Edit di tempat
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  // 1. AMBIL DATA KATEGORI DARI BACKEND (GET) - MEMBACA INTERFACE .ENV
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Gagal mengambil data kategori:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // 2. KETIKA TOMBOL EDIT DIKLIK (Buka Pop-up & Set Data Lama)
  const handleEditClick = (item: Category) => {
    setSelectedId(item.id);
    setEditName(item.name);
    setIsEditModalOpen(true);
  };

  // 3. FUNGSI SIMPAN PERUBAHAN EDIT (PUT) - MEMBACA INTERFACE .ENV
  const handleSimpanEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedId) return;

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/categories/${selectedId}`, {
        name: editName,
      });

      alert("Kategori berhasil diperbarui!");
      setIsEditModalOpen(false); // Tutup pop-up otomatis
      fetchCategories(); // Refresh tabel data secara real-time
    } catch (error) {
      console.error("Gagal mengupdate kategori:", error);
      alert("Gagal memperbarui kategori!");
    }
  };

  // 4. FUNGSI HAPUS KATEGORI (DELETE) - MEMBACA INTERFACE .ENV
  const handleHapus = async (id: number, name: string) => {
    const konfirmasi = window.confirm(`Apakah kamu yakin ingin menghapus kategori "${name}"?`);
    if (konfirmasi) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/categories/${id}`);
        alert("Kategori berhasil dihapus!");
        fetchCategories(); // Refresh tabel setelah dihapus
      } catch (error) {
        console.error("Gagal menghapus kategori:", error);
        alert("Gagal menghapus kategori!");
      }
    }
  };

  return (
    <div className="px-7 py-8 max-w-5xl mx-auto relative">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-7">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-4 h-0.5 bg-[#7B1D3F] rounded-full inline-block" />
            <span className="text-[10px] font-semibold text-[#7B1D3F] tracking-widest uppercase">
              Manajemen
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#1a0a10] tracking-tight">Kategori</h1>
          <p className="text-sm text-gray-400 mt-1">Kelola kategori event Invofest</p>
        </div>

        <Link
          to="/dashboard/kategori/create"
          className="flex items-center gap-1.5 bg-[#7B1D3F] hover:bg-[#9e2550] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
        >
          <span className="text-lg leading-none">+</span>
          Tambah Kategori
        </Link>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-6 text-center text-sm text-gray-500">Memuat data kategori...</div>
          ) : categories.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-14 gap-2">
              <span className="text-3xl">🗂️</span>
              <p className="text-sm text-gray-400 font-medium">Belum ada kategori</p>
              <p className="text-xs text-gray-300">Tambah kategori pertama kamu</p>
            </div>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {TABLE_HEADERS.map((h) => (
                    <th
                      key={h}
                      className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-4 py-3 text-left whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {categories.map((item, index) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-rose-50/40 transition-colors">
                    <td className="px-4 py-3.5 text-sm text-gray-400 w-10">{index + 1}</td>
                    
                    <td className="px-4 py-3.5 text-sm font-semibold text-[#1a0a10]">
                      {item.name}
                    </td>

                    <td className="px-4 py-3.5">
                      <div className="flex gap-2">
                        {/* Tombol Edit memicu Modal Pop-up */}
                        <button 
                          onClick={() => handleEditClick(item)}
                          className="text-xs font-semibold px-3 py-1.5 rounded-md border border-yellow-300 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 transition-colors cursor-pointer"
                        >
                          Edit
                        </button>
                        
                        {/* Tombol Hapus memicu fungsi DELETE */}
                        <button 
                          onClick={() => handleHapus(item.id, item.name)}
                          className="text-xs font-semibold px-3 py-1.5 rounded-md border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 transition-colors cursor-pointer"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer Info */}
        <div className="px-4 py-3 border-t border-gray-50 bg-gray-50/30">
          <span className="text-xs text-gray-400">
            Menampilkan <b>{categories.length}</b> kategori terdaftar
          </span>
        </div>
      </div>

      {/* MODAL POP-UP EDIT KATEGORI DI TEMPAT */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full p-6 mx-4">
            <h2 className="text-xl font-bold text-[#1a0a10] mb-1">Edit Kategori</h2>
            <p className="text-xs text-gray-400 mb-4">Ubah nama kategori secara langsung di sini tanpa pindah halaman.</p>
            
            <form onSubmit={handleSimpanEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Nama Kategori</label>
                <input 
                  type="text" 
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#7B1D3F]"
                  required
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-full bg-[#7B1D3F] hover:bg-[#5a1530] text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}