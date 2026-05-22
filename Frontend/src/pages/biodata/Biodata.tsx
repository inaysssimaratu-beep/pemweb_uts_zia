import React from "react";
import {
  User,
  IdCard,
  GraduationCap,
  School,
  MapPin,
  Phone,
} from "lucide-react";

export default function Biodata() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-rose-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-[35px] overflow-hidden w-full max-w-4xl border border-[#7A1C3D]/10">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#7A1C3D] to-[#9e2550] h-36 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16">
            <img
              src="https://somethinc.com/assets/hsh/video-hansohee.jpg"
              alt="Foto Profil"
              className="w-36 h-36 rounded-full border-[6px] border-white shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-24 pb-10 px-8">
          <h1 className="text-4xl font-extrabold text-center text-[#7A1C3D]">
            Biodata Mahasiswa
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Data diri mahasiswa Teknik Informatika
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100 shadow-sm">
              <div className="flex items-center gap-3">
                <User className="text-[#7A1C3D]" size={22} />
                <div>
                  <p className="text-sm text-gray-500">Nama</p>
                  <h2 className="font-bold text-gray-800">
                    Inays Imaratu Eliza
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3">
                <IdCard className="text-[#7A1C3D]" size={22} />
                <div>
                  <p className="text-sm text-gray-500">NIM</p>
                  <h2 className="font-bold text-gray-800">
                    24090010
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-[#7A1C3D]" size={22} />
                <div>
                  <p className="text-sm text-gray-500">Kelas</p>
                  <h2 className="font-bold text-gray-800">
                    4A
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100 shadow-sm">
              <div className="flex items-center gap-3">
                <School className="text-[#7A1C3D]" size={22} />
                <div>
                  <p className="text-sm text-gray-500">
                    Program Studi
                  </p>
                  <h2 className="font-bold text-gray-800">
                    Teknik Informatika
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100 shadow-sm md:col-span-2">
              <div className="flex items-center gap-3">
                <School className="text-[#7A1C3D]" size={22} />
                <div>
                  <p className="text-sm text-gray-500">
                    Universitas
                  </p>
                  <h2 className="font-bold text-gray-800">
                    Universitas Harkat Negeri
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-sm md:col-span-2">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#7A1C3D]" size={22} />
                <div>
                  <p className="text-sm text-gray-500">
                    Alamat
                  </p>
                  <h2 className="font-bold text-gray-800">
                    Sitanggal, Larangan, Brebes
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100 shadow-sm md:col-span-2">
              <div className="flex items-center gap-3">
                <Phone className="text-[#7A1C3D]" size={22} />
                <div>
                  <p className="text-sm text-gray-500">
                    No. Telepon
                  </p>
                  <h2 className="font-bold text-gray-800">
                    085143219133
                  </h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}