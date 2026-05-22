import type { Request, Response } from 'express';
import { prisma } from "../lib/db.js";

// 1. Menampilkan semua pembicara
export const getAllPembicara = async (req: Request, res: Response) => {
    try {
        const pembicara = await prisma.pembicara.findMany({
            orderBy: { id: "asc" }
        });
        res.json(pembicara);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil data pembicara", error });
    }
};  

// 2. Menyimpan data pembicara baru
export const createPembicara = async (req: Request, res: Response) => {
    try {
        const { name, role, image } = req.body;

        if (!name || !role || !image) {
            return res.status(400).json({ message: "Nama, role, dan link gambar harus diisi" });
        }

        const newPembicara = await prisma.pembicara.create({
            data: { name, role, image }
        });

        res.status(201).json(newPembicara);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat membuat data pembicara", error });   
    }
};

// 3. Menampilkan data pembicara berdasarkan id
export const getPembicaraById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const pembicara = await prisma.pembicara.findUnique({
            where: { id }
        });

        if (!pembicara) {
            return res.status(404).json({ message: "Pembicara tidak ditemukan" });
        }

        res.json(pembicara);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil data pembicara", error });
    }
};

// 4. Mengupdate data pembicara berdasarkan id
export const updatePembicaraById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { name, role, image } = req.body;

        const updatedPembicara = await prisma.pembicara.update({
            where: { id },
            data: { name, role, image }
        });

        res.json(updatedPembicara);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengupdate data pembicara", error });
    }
};

// 5. Menghapus data pembicara berdasarkan id
export const deletePembicaraById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        
        await prisma.pembicara.delete({
            where: { id }
        });

        res.json({ message: "Pembicara berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat menghapus data pembicara", error });
    }
};