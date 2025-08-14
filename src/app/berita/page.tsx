// app/berita/page.tsx
"use client";
import { useRef, useState } from "react";
import Image from "next/image";

interface Berita {
  id: number;
  judul: string;
  tanggal: string;
  ringkasan: string;
  isiLengkap: string;
  gambar: string;
}

export default function BeritaPage() {
  const [bukaBeritaId, setBukaBeritaId] = useState<number | null>(null);
  const refs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleBacaSelengkapnya = (id: number) => {
    setBukaBeritaId(id);
    setTimeout(() => {
      refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const beritaList: Berita[] = [
    {
      id: 1,
      judul: "Pengabdian ke Lembaga Pendidikan di Desa Cidugaleun",
      tanggal: "28 Juli 2025",
      ringkasan:
        "Tim KKN Politeknik LP3I Desa Cidugaleun mengajar siswa kelas 6 SDN Cidugaleun tentang gemar menabung dan manfaatnya...",
      isiLengkap: `Cidugaleun, 28 Juli 2025 – Tim Kuliah Kerja Nyata (KKN) Politeknik LP3I yang sedang mengabdi di Desa Cidugaleun melaksanakan kegiatan pengabdian di sektor pendidikan dengan mengunjungi SDN Cidugaleun. Dalam kegiatan tersebut, para mahasiswa KKN berkesempatan untuk mengajar siswa kelas 6 dengan materi bertema “Gemar Menabung dan Manfaatnya”.
                  Materi yang disampaikan bertujuan untuk menanamkan kesadaran sejak dini mengenai pentingnya kebiasaan menabung. Para siswa diajak berdiskusi mengenai cara menabung yang baik, perbedaan antara kebutuhan dan keinginan, serta bagaimana uang yang ditabung dapat dimanfaatkan untuk keperluan masa depan.
                  Salah satu mahasiswa KKN menyampaikan bahwa menabung bukan hanya soal menyimpan uang, tetapi juga melatih disiplin, perencanaan, dan tanggung jawab dalam mengatur keuangan pribadi. 
                  Guru kelas 6 SDN Cidugaleun mengapresiasi kegiatan ini karena memberikan wawasan baru bagi siswa dengan metode pembelajaran yang interaktif dan menyenangkan. Kegiatan ini diharapkan mampu menumbuhkan kebiasaan positif pada anak-anak sejak dini, sehingga mereka memiliki fondasi yang kuat untuk mengelola keuangan di masa depan.`,
      gambar: "/images/gemar-menabung.jpg",
    },
    {
      id: 2,
      judul: "Pelatihan Training Soft Skill oleh Tim KKN LP3I di Desa Cidugaleun",
      tanggal: "29 Juli 2025",
      ringkasan:
        "Tim KKN LP3I Desa Cidugaleun mengadakan pelatihan soft skill di GOR Desa Cidugaleun untuk meningkatkan kepercayaan diri dan kemampuan komunikasi warga...",
      isiLengkap: `Cidugaleun, 29 Juli 2025 – Dalam rangka memberdayakan masyarakat, Tim Kuliah Kerja Nyata (KKN) LP3I Desa Cidugaleun menyelenggarakan pelatihan soft skill yang berlangsung di GOR Desa Cidugaleun. Kegiatan ini diikuti oleh berbagai kalangan masyarakat, mulai dari pelajar, pemuda, hingga ibu rumah tangga.
      Pelatihan ini mencakup materi tentang cara berkomunikasi yang efektif, meningkatkan rasa percaya diri, dan membangun kerja sama tim. Para peserta juga diajak untuk mengikuti berbagai simulasi interaktif yang membantu mereka mempraktikkan langsung keterampilan yang diajarkan.
      Ketua Tim KKN LP3I Desa Cidugaleun menyampaikan bahwa pelatihan ini bertujuan agar masyarakat memiliki keterampilan yang dapat menunjang kegiatan sehari-hari maupun pekerjaan.
      Dengan adanya kegiatan ini, diharapkan masyarakat Desa Cidugaleun dapat lebih siap menghadapi tantangan di dunia kerja dan kehidupan sosial.`,
      gambar: "/images/training-soft-skil.jpg",
    },
    {
      id: 3,
      judul: "Mahasiswa KKN LP3I Perkenalkan QRIS untuk UMKM Wisata Curug Ciparay",
      tanggal: "5 Agustus 2025",
      ringkasan:
        "Mahasiswa KKN LP3I Desa Cidugaleun menggelar sosialisasi penggunaan QRIS bagi pelaku UMKM di kawasan wisata Curug Ciparay...",
      isiLengkap: `Sebagai bagian dari program Kuliah Kerja Nyata (KKN), mahasiswa LP3I yang tengah mengabdi di Desa Cidugaleun turut berkontribusi dalam memajukan sektor pariwisata dan perekonomian desa.
      Salah satu inisiatif yang dilakukan adalah memperkenalkan sistem pembayaran digital QRIS (Quick Response Code Indonesian Standard) kepada para pelaku UMKM yang berjualan di kawasan wisata Curug Ciparay.
      Kegiatan sosialisasi yang dilaksanakan pada 8 Agustus 2025 ini diikuti oleh puluhan pelaku usaha kuliner, penjual cinderamata, hingga penyedia jasa parkir di area wisata.
      Mahasiswa KKN LP3I memandu pelaku UMKM mulai dari cara mendaftar QRIS, mengatur akun, hingga menerima pembayaran secara digital.
      Kepala Desa Cidugaleun menyambut positif kegiatan ini.
      "Kami sangat mengapresiasi kontribusi mahasiswa KKN LP3I. Dengan QRIS, pedagang di Curug Ciparay akan lebih mudah bertransaksi, wisatawan pun merasa lebih nyaman, dan pencatatan keuangan menjadi lebih tertib," ujarnya.
      Selain mempermudah transaksi tanpa uang tunai, program ini diharapkan dapat meningkatkan daya tarik wisata Curug Ciparay, mendukung UMKM lokal, dan mendorong Desa Cidugaleun menjadi desa wisata yang modern dan siap bersaing di era digital.`,
      gambar: "/images/pengenalan-qris.jpg",
    },
    {
      id: 4,
      judul: "Pembagian Bantuan Beras untuk Masyarakat Desa Cidugaleun",
      tanggal: "5 Agustus 2025",
      ringkasan:
        "Aparatur Desa Cidugaleun membagikan bantuan beras kepada warga dibantu oleh anak KKN LP3I Tasikmalaya",
      isiLengkap: `Cidugaleun, 5 Agustus 2025 – Tim Kuliah Kerja Nyata (KKN) Politeknik LP3I yang sedang mengabdi di Desa Cidugaleun mengadakan kegiatan pembagian bantuan beras kepada masyarakat. Kegiatan ini diikuti oleh anak-anak KKN LP3I Tasikmalaya, dengan tujuan aktif dalam mendukung kegiatan aparatur desa pada acara pembagian bantuan beras kepada masyarakat. Kegiatan ini dilaksanakan sebagai wujud pengabdian kepada masyarakat, dengan memastikan proses penyaluran berjalan tertib, lancar, dan tepat sasaran.`,
      gambar: "/image/beras.jpg",
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 pt-28">
      <h1 className="text-3xl font-bold text-center mb-8">
        Berita Desa Cidugaleun
      </h1>

      {beritaList.map((berita) => (
        <div
          key={berita.id}
          ref={(el: HTMLDivElement | null) => {
            refs.current[berita.id] = el;
          }}
          className="mb-10 border-b pb-8"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/5">
              <Image
                src={berita.gambar}
                alt={berita.judul}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="text-xl font-bold mb-1">{berita.judul}</h2>
              <p className="text-gray-500 text-sm mb-3">{berita.tanggal}</p>
              <p className="text-gray-700 mb-3 text-justify">
                {bukaBeritaId === berita.id
                  ? berita.isiLengkap
                  : berita.ringkasan}
              </p>
              {bukaBeritaId !== berita.id && (
                <button
                  onClick={() => handleBacaSelengkapnya(berita.id)}
                  className="text-green-600 font-semibold hover:underline"
                >
                  Baca Selengkapnya →
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
