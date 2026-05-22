import React from "react";

export default function Biodata() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="bg-white rounded-[30px] shadow-lg p-10 w-full max-w-2xl border border-[#7A1C3D]/10">
        <h1 className="text-3xl font-extrabold text-[#7A1C3D] mb-8 text-center">
          Biodata Mahasiswa
        </h1>

        <div className="space-y-5 text-gray-700">
          <div className="flex border-b pb-3">
            <span className="font-bold w-44">
              Nama
            </span>
            <span>: Inays Imaratu Eliza</span>
          </div>

          <div className="flex border-b pb-3">
            <span className="font-bold w-44">
              NIM
            </span>
            <span>: 24090010</span>
          </div>

          <div className="flex border-b pb-3">
            <span className="font-bold w-44">
              Kelas
            </span>
            <span>: 4A</span>
          </div>

          <div className="flex border-b pb-3">
            <span className="font-bold w-44">
              Program Studi
            </span>
            <span>: Teknik Informatika</span>
          </div>

          <div className="flex border-b pb-3">
            <span className="font-bold w-44">
              Universitas
            </span>
            <span>: Universitas Harkat Negeri</span>
          </div>

          <div className="flex">
            <span className="font-bold w-44">
              Alamat
            </span>
            <span>: Sitanggal, Larangan, Brebes</span>
          </div>
        </div>
      </div>
    </div>
  );
}