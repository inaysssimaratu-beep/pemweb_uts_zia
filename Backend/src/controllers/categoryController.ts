import { type Request, type Response } from "express";
import { prisma } from "../lib/db.js";

// 1. Menampilkan semua category
export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { id: "asc" }
        });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil data category", error });
    }
};

// 2. Menyimpan data category baru
export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;  
        
        if (!name) {
            return res.status(400).json({ message: "Nama kategori harus diisi" });
        }
        
        const newCategory = await prisma.category.create({
            data: { name }
        });  
        
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat membuat category", error });   
    }
};  

// 3. Menampilkan data category berdasarkan id
export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const category = await prisma.category.findUnique({
            where: { id }
        }); 
        
        if (!category) {
            return res.status(404).json({ message: "Category tidak ditemukan" });
        }   
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil category", error });
    }
};

// 4. Mengupdate data category berdasarkan id
export const updateCategoryById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;
        
        if (!name) {
            return res.status(400).json({ message: "Nama kategori harus diisi" });
        }

        const updatedCategory = await prisma.category.update({
            where: { id },
            data: { name }
        });
        
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengupdate category", error });
    }
};

// 5. Menghapus data category berdasarkan id
export const deleteCategoryById = async (req: Request, res: Response) => {  
    try {
        const id = parseInt(req.params.id);
        
        await prisma.category.delete({
            where: { id }
        });
        
        res.json({ message: "Category berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat menghapus category", error });
    }   
};