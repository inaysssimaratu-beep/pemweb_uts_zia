import type { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. Menampilkan semua data
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      include: { category: true }, // Biar nama kategorinya ikut terbawa
      orderBy: { createdAt: "desc" },
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data", error });
  }
};

// 2. Menyimpan data baru
export const createEvent = async (req: Request, res: Response) => {
    try {
        const { name, categoryId, location, dateEvent, description } = req.body;

        const newEvent = await prisma.event.create({
            data: {
                name,
                categoryId: Number(categoryId),
                location,
                dateEvent: new Date(dateEvent),
                description,
            },
        });
        res.status(201).json({ message: "Berhasil menyimpan data", newEvent });
    } catch (error) {
        res.status(500).json({ message: "Gagal menyimpan data", error });
    }
};

// 3. Menampilkan data berdasarkan ID
export const getEventById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const event = await prisma.event.findUnique({
            where: { id },
            include: { category: true }
        });

        if (!event) {
            return res.status(404).json({ message: "Event tidak ditemukan" });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil detail data", error });
    }
};

// 4. Mengupdate data berdasarkan ID
export const updateEventById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { name, categoryId, location, dateEvent, description } = req.body;

        const updatedEvent = await prisma.event.update({
            where: { id },
            data: {
                name,
                categoryId: categoryId ? Number(categoryId) : undefined,
                location,
                dateEvent: dateEvent ? new Date(dateEvent) : undefined,
                description,
            }
        });
        res.json({ message: "Gagal memperbarui data", updatedEvent });
    } catch (error) {
        res.status(500).json({ message: "Gagal memperbarui data", error });
    }
};

// 5. Menghapus data berdasarkan ID
export const deleteEventById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.event.delete({
            where: { id }
        });
        res.json({ message: "Event berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: "Gagal menghapus data", error });
    }
};