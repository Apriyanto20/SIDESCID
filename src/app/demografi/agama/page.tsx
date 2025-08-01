export default function AgamaPage() {
  // Sample data
  const agamaData = [
    { agama: "Islam", jumlah: 1200, color: "bg-blue-600" },
    { agama: "Kristen", jumlah: 150, color: "bg-blue-400" },
    { agama: "Hindu", jumlah: 25, color: "bg-blue-300" },
    { agama: "Budha", jumlah: 10, color: "bg-blue-200" },
    { agama: "Konghucu", jumlah: 5, color: "bg-blue-100" },
  ];

  const totalPenduduk = agamaData.reduce((sum, item) => sum + item.jumlah, 0);

  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Komposisi Agama Warga</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Distribusi penduduk Desa Cidugaleun berdasarkan agama yang dianut
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Data Visualization */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
            Persentase Agama
          </h2>
          
          <div className="space-y-6">
            {agamaData.map((item) => {
              const percentage = (item.jumlah / totalPenduduk * 100).toFixed(1);
              return (
                <div key={item.agama} className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{item.agama}</span>
                    <span className="text-sm font-semibold text-blue-600">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${item.color} transition-all duration-500 ease-out`} 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item.jumlah.toLocaleString()} orang
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
              Data Statistik
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Agama
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Jumlah
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Persentase
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {agamaData.map((item) => {
                  const percentage = (item.jumlah / totalPenduduk * 100).toFixed(1);
                  return (
                    <tr key={item.agama} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        <div className="flex items-center">
                          <span className={`w-3 h-3 rounded-full ${item.color} mr-3`}></span>
                          {item.agama}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {item.jumlah.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {percentage}%
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-blue-50 font-semibold">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Total</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{totalPenduduk.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 max-w-6xl mx-auto bg-blue-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Informasi Data</h3>
            <p className="text-blue-700">
              Data ini diperbarui secara berkala berdasarkan registrasi kependudukan terakhir. 
              Persentase dihitung dari total {totalPenduduk.toLocaleString()} penduduk Desa Cidugaleun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}