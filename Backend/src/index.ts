import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client"; // Hubungkan ke Prisma Client
import eventRoutes from "./routes/eventRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import pembicaraRoutes from "./routes/pembicaraRoute.js";

const app = express();
const port = 3000;
const prisma = new PrismaClient(); // Inisialisasi prisma untuk query ke DB

// ==========================================
// PENGATURAN CORS TERBARU (ANTI-BLOKIR DEPLOY)
// ==========================================
app.use(
  cors({
    origin: "*", // Mengizinkan semua domain (FE lokal maupun production) untuk akses API
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// ==========================================
// ENDPOINT API LOGIN (Penyambung ke Frontend)
// ==========================================
app.post("/api/login", async (req, res) => {
  const { nim, password } = req.body;

  try {
    // 1. Cari user di database Supabase berdasarkan NIM
    const user = await prisma.user.findUnique({
      where: { nim: nim },
    });

    // 2. Jika user tidak terdaftar
    if (!user) {
      return res.status(401).json({ message: "NIM tidak terdaftar!" });
    }

    // 3. Cek apakah password cocok (karena di DB kamu simpan teks biasa 'qwerty123')
    if (user.password !== password) {
      return res.status(401).json({ message: "Password salah!" });
    }

    // 4. Jika sukses cocok, kirim status 200 beserta nama user ke Zustand frontend
    return res.status(200).json({
      message: "Login berhasil",
      user: user.nama,
    });

  } catch (error) {
    console.error("Error Login:", error);
    return res.status(500).json({ message: "Koneksi ke database gagal!" });
  }
});

// Rute bawaan project kamu yang lain
app.use('/events', eventRoutes);
app.use('/categories', categoryRoutes);
app.use('/pembicara', pembicaraRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});