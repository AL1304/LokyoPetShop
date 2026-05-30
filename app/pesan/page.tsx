"use client";
import Link from "next/link";
import { useState } from "react";

export default function PesanPage() {
  const [nama, setNama] = useState("");
  const [namaKucing, setNamaKucing] = useState("");
  const [jumlahkucing, setJumlahKucing] = useState("");
  const [grooming, setGrooming] = useState("");
  const [layanan, setLayanan] = useState("");   
  const [tanggal, setTanggal] = useState("");

  const kirimWhatsApp = () => {
    const nomorWA = "081216145050";

    const pesan = `
Halo Lokyo Pet Shop

Nama Pemilik: ${nama}
Nama Kucing: ${namaKucing}
Jumlah Kucing: ${jumlahkucing}
Tanggal: ${tanggal}
Jenis Grooming: ${grooming}
Layanan: ${layanan}
Terima kasih!
    `;

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(
      pesan
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-xl mx-auto">

        <h1 className="text-4xl text-center font-bold mb-8">
          Form Grooming
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Nama Pemilik"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />

          <input
            type="text"
            placeholder="Nama Kucing"
            value={namaKucing}
            onChange={(e) => setNamaKucing(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />

           <select
            value={jumlahkucing}
            onChange={(e) => setJumlahKucing(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          >
            <option value="" disabled>Berapa Kucing?</option>
            <option>1</option>
            <option>2</option>
            <option>Max 3</option>
          </select>

          <select
            value={grooming}
            onChange={(e) => setGrooming(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          >
            <option value="" disabled>Pilih Grooming</option>
            <option>Grooming Biasa</option>
            <option>Grooming Kutu / Jamur</option>
          </select>

          <div>
            
  <label className="block mb-2">
    Tanggal Grooming
  </label>

  <input
    type="date"
    value={tanggal}
    onChange={(e) => setTanggal(e.target.value)}
    className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
  />
</div>

          <select
            value={layanan}
            onChange={(e) => setLayanan(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          >
            <option value="" disabled>Pilih Layanan</option>
            <option>Diantar Sendiri</option>
            <option>Jemput Kucing</option>
          </select>

          <button
            onClick={kirimWhatsApp}
            className="w-full bg-green-500 text-black font-semibold py-3 rounded-lg"
          >
            Kirim ke WhatsApp
          </button>

         <Link
            href="/"
            className="block text-center mt-4 text-gray-400 hover:text-white transition"
    >
            ← Kembali
         </Link>

        </div>
      </div>
    </main>
  );
}