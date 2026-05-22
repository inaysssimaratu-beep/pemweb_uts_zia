import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Gunakan axios bawaan project kamu

interface Pembicara {
  id: number;
  name: string;
  role: string;
  image: string;
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7B1D3F] to-[#c9395e] text-white text-xs font-bold flex items-center justify-center ">
      {initials}
    </div>
  );
}

export default function PembicaraIndex() {
  const [speakers, setSpeakers] = useState<Pembicara[]>([]);
  const [loading, setLoading] = useState(true);

  // State untuk kontrol Modal Edit di tempat beserta Foto
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");
  const [editImage, setEditImage] = useState(""); // State menampung URL foto

  // 1. AMBIL DATA DARI SUPABASE (GET) - SEKARANG MEMBACA .ENV
  const fetchPembicara = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/pembicara`);
      setSpeakers(response.data);
    } catch (error) {
      console.error("Gagal mengambil data pembicara:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPembicara();
  }, []);

  // 2. KETIKA TOMBOL EDIT DIKLIK (Buka Pop-up & Ambil Data Lama)
  const handleEditClick = (item: Pembicara) => {
    setSelectedId(item.id);
    setEditName(item.name);
    setEditRole(item.role);
    setEditImage(item.image || ""); // Ambil data foto lama
    setIsEditModalOpen(true);
  };

  // 3. FUNGSI SIMPAN PERUBAHAN EDIT (PUT) - SEKARANG MEMBACA .ENV
  const handleSimpanEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedId) return;

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/pembicara/${selectedId}`, {
        name: editName,
        role: editRole,
        image: editImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      });

      alert("Data pembicara berhasil diperbarui!");
      setIsEditModalOpen(false); // Tutup pop-up otomatis
      fetchPembicara(); // Refresh tabel secara real-time
    } catch (error) {
      console.error("Gagal mengupdate pembicara:", error);
      alert("Gagal memperbarui data!");
    }
  };

  // 4. FUNGSI HAPUS DATA (DELETE) - SEKARANG MEMBACA .ENV
  const handleHapus = async (id: number, name: string) => {
    const konfirmasi = window.confirm(`Apakah kamu yakin ingin menghapus pembicara ${name}?`);
    if (konfirmasi) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/pembicara/${id}`);
        alert("Pembicara berhasil dihapus!");
        fetchPembicara(); 
      } catch (error) {
        console.error("Gagal menghapus pembicara:", error);
        alert("Gagal menghapus pembicara!");
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
          <h1 className="text-2xl font-bold text-[#1a0a10] tracking-tight">Pembicara</h1>
          <p className="text-sm text-gray-400 mt-1">Kelola pembicara event Invofest</p>
        </div>

        <Link
          to="/dashboard/pembicara/create"
          className="flex items-center gap-1.5 bg-[#7B1D3F] hover:bg-[#9e2550] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          <span className="text-base leading-none">+</span>
          Tambah Pembicara
        </Link>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-sm text-gray-500">Memuat data pembicara...</div>
        ) : speakers.length === 0 ? (
          <div className="p-6 text-center text-sm text-gray-500">Belum ada data pembicara di database.</div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {["No", "Pembicara", "Pekerjaan / Role", "Aksi"].map((h) => (
                  <th key={h} className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-4 py-2.5 text-left whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {speakers.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-rose-50/40 transition-colors">
                  <td className="px-4 py-3.5 text-sm text-gray-300 w-10">{index + 1}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={item.name} />
                      <span className="text-sm font-semibold text-[#1a0a10]">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs font-medium bg-rose-50 text-[#7B1D3F] px-2.5 py-1 rounded-full">
                      {item.role}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEditClick(item)}
                        className="text-xs font-semibold px-3 py-1.5 rounded-md border border-yellow-300 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 transition-colors cursor-pointer"
                      >
                        Edit
                      </button>
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

        <div className="px-4 py-3 border-t border-gray-50">
          <span className="text-xs text-gray-300">Menampilkan {speakers.length} pembicara</span>
        </div>
      </div>

      {/* MODAL POP-UP EDIT DI TEMPAT (SUDAH ADA INPUT FOTO) */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full p-6 mx-4">
            <h2 className="text-xl font-bold text-[#1a0a10] mb-1">Edit Pembicara</h2>
            <p className="text-xs text-gray-400 mb-4">Ubah data pembicara secara langsung di sini tanpa pindah halaman.</p>
            
            <form onSubmit={handleSimpanEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#7B1D3F]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Pekerjaan / Role</label>
                <input 
                  type="text" 
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#7B1D3F]"
                  required
                />
              </div>

              {/* KOLOM BARU: INPUT URL FOTO */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">URL Foto (Opsional)</label>
                <input 
                  type="text" 
                  value={editImage}
                  onChange={(e) => setEditImage(e.target.value)}
                  placeholder="https://link-foto.com/gambar.jpg"
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#7B1D3F]"
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