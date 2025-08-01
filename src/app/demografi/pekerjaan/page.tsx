import JobChart from '../../components/JobChart';
import JobTable from '../../components/JobTable';

export default function PekerjaanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Profil Pekerjaan Warga</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Distribusi pekerjaan masyarakat Desa Cidugaleun
          </p>
          <div className="w-24 h-1 bg-blue-300 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
                Statistik Pekerjaan
              </h2>
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Data Terkini
              </span>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <JobChart />
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              * Data berdasarkan registrasi kependudukan terakhir
            </div>
          </div>

          {/* Table Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
                Daftar Pekerjaan
              </h2>
            </div>
            <div className="overflow-auto max-h-[500px] text-gray-800">
              <div className="min-w-full">
                <JobTable />
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Keterangan Data</h3>
              <p className="text-blue-700">
                Data pekerjaan ini dikategorikan berdasarkan sektor utama usaha warga.
                Pembaruan dilakukan secara berkala sesuai perubahan data kependudukan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} Desa Cidugaleun - Sistem Informasi Demografi
      </footer>
    </div>
  );
}