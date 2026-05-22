import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Definisi tipe data Event dan relasi Kategori sesuai database
interface Category {
  id: number;
  name: string;
}

interface EventData {
  id: number;
  name: string;
  location: string;
  dateEvent: string;
  description: string;
  category?: Category; // Relasi database cloud
}

export default function EventIndex() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [dbCategories, setDbCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // State untuk kontrol Modal Edit di tempat
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // 1. AMBIL DATA EVENT & KATEGORI LIVE DARI DATABASE (GET) - MEMBACA .ENV
  const fetchEventsAndCategories = async () => {
    try {
      const [eventsRes, catsRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/events`),
        axios.get(`${import.meta.env.VITE_API_URL}/categories`)
      ]);
      setEvents(eventsRes.data);
      setDbCategories(catsRes.data);
    } catch (error) {
      console.error("Gagal memuat data dari database cloud:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventsAndCategories();
  }, []);

  // 2. KETIKA TOMBOL EDIT DIKLIK (Buka Pop-up & Set Data Lama)
  const handleEditClick = (item: EventData) => {
    setSelectedId(item.id);
    setEditName(item.name);
    setEditCategoryId(item.category?.id ? String(item.category.id) : "");
    setEditLocation(item.location);
    // Format tanggal ke YYYY-MM-DD agar pas dengan input type="date"
    const formattedDate = item.dateEvent ? item.dateEvent.split("T")[0] : "";
    setEditDate(formattedDate);
    setEditDescription(item.description);
    setIsEditModalOpen(true);
  };

  // 3. FUNGSI SIMPAN PERUBAHAN EDIT EVENT (PUT) - MEMBACA .ENV
  const handleSimpanEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedId) return;

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/events/${selectedId}`, {
        name: editName,
        categoryId: Number(editCategoryId),
        location: editLocation,
        dateEvent: editDate,
        description: editDescription
      });

      alert("Data event berhasil diperbarui!");
      setIsEditModalOpen(false); // Tutup pop-up otomatis
      fetchEventsAndCategories(); // Refresh tabel secara live
    } catch (error) {
      console.error("Gagal memperbarui event:", error);
      alert("Gagal memperbarui data event!");
    }
  };

  // 4. FUNGSI HAPUS EVENT (DELETE) - MEMBACA .ENV
  const handleHapus = async (id: number, name: string) => {
    const konfirmasi = window.confirm(`Apakah kamu yakin ingin menghapus event "${name}"?`);
    if (konfirmasi) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/events/${id}`);
        alert("Event berhasil dihapus dari database cloud!");
        fetchEventsAndCategories(); // Refresh tabel setelah didepak
      } catch (error) {
        console.error("Gagal menghapus event:", error);
        alert("Gagal menghapus event!");
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
          <h1 className="text-2xl font-bold text-[#1a0a10] tracking-tight">Event</h1>
          <p className="text-sm text-gray-400 mt-1">Kelola semua event Invofest</p>
        </div>

        <Link
          to="/dashboard/event/create"
          className="flex items-center gap-1.5 bg-[#7B1D3F] hover:bg-[#9e2550] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          <span className="text-base leading-none">+</span>
          Tambah Event
        </Link>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-sm text-gray-500">Memuat data event cloud...</div>
        ) : events.length === 0 ? (
          <div className="p-6 text-center text-sm text-gray-500">Belum ada data event di database cloud kamu.</div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {["No", "Nama Event", "Kategori", "Tanggal", "Lokasi", "Aksi"].map((h) => (
                  <th key={h} className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-4 py-2.5 text-left whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {events.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-rose-50/40 transition-colors">
                  <td className="px-4 py-3.5 text-sm text-gray-300 w-10">{index + 1}</td>

                  <td className="px-4 py-3.5 text-sm font-semibold text-[#1a0a10]">
                    {item.name}
                  </td>

                  <td className="px-4 py-3.5">
                    <span className="text-xs font-medium bg-rose-50 text-[#7B1D3F] px-2.5 py-1 rounded-full">
                      {item.category?.name || "Tanpa Kategori"}
                    </span>
                  </td>

                  <td className="px-4 py-3.5 text-sm text-gray-500">
                    {item.dateEvent ? new Date(item.dateEvent).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }) : "-"}
                  </td>

                  <td className="px-4 py-3.5 text-sm text-gray-500">
                    {item.location}
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
          <span className="text-xs text-gray-300">Menampilkan {events.length} event</span>
        </div>
      </div>

      {/* MODAL POP-UP EDIT EVENT DI TEMPAT (MAROON THEME) */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full p-6 mx-4 overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold text-[#1a0a10] mb-1">Edit Event</h2>
            <p className="text-xs text-gray-400 mb-4">Ubah data event secara langsung tanpa pindah halaman.</p>
            
            <form onSubmit={handleSimpanEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Nama Event</label>
                <input 
                  type="text" 
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#7B1D3F]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Kategori</label>
                <select 
                  value={editCategoryId}
                  onChange={(e) => setEditCategoryId(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#7B1D3F] bg-white"
                  required
                >
                  <option value="">-- Pilih Kategori --</option>
                  {dbCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Tanggal Event</label>
                <input 
                  type="date" 
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#7B1D3F]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Lokasi</label>
                <input 
                  type="text" 
                  value={editLocation}
                  onChange={(e) => setEditLocation(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#7B1D3F]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Deskripsi Event</label>
                <textarea 
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#7B1D3F] h-20 resize-none"
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