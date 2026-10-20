import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import {
  MapPin,
  Star,
  Calendar,
  Users,
  Clock,
  Check,
  X,
} from 'lucide-react'

export default function DetailDestination() {
    const navigate = useNavigate()
  return (
    <div className="bg-slate-100 min-h-screen pb-32">
      {/* HERO IMAGE */}
      <div className="relative h-[350px] overflow-hidden">
        <button
  onClick={() => navigate(-1)}
  className="absolute top-5 left-5 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full"
>
  <ArrowLeft className="text-white" />
</button>
        <img
          src="src/assets/bali.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-6 left-5 right-5">
          <div className="flex items-center gap-2 text-white text-sm mb-2">
            <MapPin size={16} />
            <span>Bali, Indonesia</span>
          </div>

          <h1 className="text-4xl font-bold text-white">
            Bali Beach Paradise
          </h1>

          <div className="flex items-center gap-4 mt-3 text-white">
            <div className="flex items-center gap-1">
              <Star size={16} fill="yellow" color="yellow" />
              <span>4.9</span>
            </div>

            <span>2.340 Review</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-4 -mt-0 relative z-10">
        {/* INFO CARD */}
        <div className="bg-white rounded-3xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Mulai Dari</p>

              <h2 className="text-3xl font-bold text-orange-500">
                Rp 3.250.000
              </h2>
            </div>

            <button className="bg-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold">
              Booking Sekarang
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="bg-slate-100 rounded-2xl p-4 text-center">
              <Calendar className="mx-auto mb-2 text-cyan-500" />
              <p className="text-sm text-slate-500">Durasi</p>
              <h3 className="font-bold">4 Hari</h3>
            </div>

            <div className="bg-slate-100 rounded-2xl p-4 text-center">
              <Users className="mx-auto mb-2 text-cyan-500" />
              <p className="text-sm text-slate-500">Peserta</p>
              <h3 className="font-bold">20 Orang</h3>
            </div>

            <div className="bg-slate-100 rounded-2xl p-4 text-center">
              <Clock className="mx-auto mb-2 text-cyan-500" />
              <p className="text-sm text-slate-500">Open Trip</p>
              <h3 className="font-bold">Setiap Minggu</h3>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-white rounded-3xl p-5 mt-5">
          <h2 className="text-2xl font-bold mb-4">
            Tentang Wisata
          </h2>

          <p className="text-slate-600 leading-8">
            Bali Beach Paradise menawarkan pengalaman wisata tropis terbaik
            dengan pantai eksotis, laut biru jernih, sunset menakjubkan,
            dan berbagai aktivitas seru mulai dari snorkeling hingga island
            hopping bersama peserta open trip lainnya.
          </p>
        </div>

        {/* FACILITIES */}
        <div className="bg-white rounded-3xl p-5 mt-5">
          <h2 className="text-2xl font-bold mb-5">
            Fasilitas
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 rounded-2xl p-4">
              🏨 Hotel Included
            </div>

            <div className="bg-slate-100 rounded-2xl p-4">
              🍽 Makan 3x Sehari
            </div>
            <div className="bg-slate-100 rounded-2xl p-4">
              🚐 Transportasi
            </div>

            <div className="bg-slate-100 rounded-2xl p-4">
              📷 Dokumentasi
            </div>
          </div>
        </div>

        {/* INCLUDE EXCLUDE */}
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <div className="bg-white rounded-3xl p-5">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Include
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="text-green-500" />
                <p>Hotel dan Penginapan</p>
              </div>

              <div className="flex items-center gap-3">
                <Check className="text-green-500" />
                <p>Transportasi Lokal</p>
              </div>

              <div className="flex items-center gap-3">
                <Check className="text-green-500" />
                <p>Tiket Wisata</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Exclude
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <X className="text-red-500" />
                <p>Tiket Pesawat</p>
              </div>

              <div className="flex items-center gap-3">
                <X className="text-red-500" />
                <p>Keperluan Pribadi</p>
              </div>

              <div className="flex items-center gap-3">
                <X className="text-red-500" />
                <p>Biaya Tambahan</p>
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="bg-white rounded-3xl p-5 mt-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold">
              Galeri Wisata
            </h2>

            <button className="text-cyan-500 font-semibold">
              Lihat Semua
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl h-40 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl h-40 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl h-40 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl h-40 w-full object-cover"
            />
          </div>
        </div>

        {/* REVIEW */}
        <div className="bg-white rounded-3xl p-5 mt-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Review Peserta
            </h2>

            <div className="flex items-center gap-1">
              <Star fill="yellow" color="yellow" size={18} />
              <span className="font-bold">4.9</span>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="bg-slate-100 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">Andi Saputra</h3>
                <span className="text-sm text-slate-500">
                  2 hari lalu
                </span>
              </div>

              <p className="text-slate-600 mt-2">
                Tripnya seru banget, guide ramah dan destinasi sangat indah!
              </p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">Salsa Putri</h3>
                <span className="text-sm text-slate-500">
                  1 minggu lalu
                </span>
              </div>

              <p className="text-slate-600 mt-2">
                Recommended untuk healing dan cari teman baru.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING BOOKING */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between shadow-2xl">
        <div>
          <p className="text-sm text-slate-400">
            Total Harga
          </p>

          <h2 className="text-2xl font-bold text-orange-500">
            Rp 3.250.000
          </h2>
        </div>

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg">
          Booking
        </button>
      </div>
    </div>
  )
}