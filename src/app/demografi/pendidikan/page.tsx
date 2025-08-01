import EducationChart from '@app/app/components/EducationChart';
import EducationTable from '@app/app/components/EducationTable';

const PendidikanPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Profil Pendidikan Warga</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Distribusi tingkat pendidikan masyarakat Desa Cidugaleun
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
                Statistik Pendidikan
              </h2>
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Data Terkini
              </span>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <EducationChart />
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
                Daftar Pendidikan
              </h2>
            </div>
            <div className="overflow-auto max-h-[500px] text-gray-800">
              <div className="min-w-full">
                <EducationTable />
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Keterangan Data</h3>
              <p className="text-blue-700">
                Data pendidikan ini menunjukkan tingkat pendidikan terakhir yang dicapai warga. 
                Klasifikasi mengikuti standar Kementerian Pendidikan dan Kebudayaan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} Desa Cidugaleun - Sistem Informasi Pendidikan
      </footer>
    </div>
  );
};

export default PendidikanPage;