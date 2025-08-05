"use client"
const jobData = [
  { job: 'Petani', total: 120 },
  { job: 'Buruh Tani', total: 75 },
  { job: 'PNS', total: 25 },
  { job: 'Pedagang', total: 40 },
  { job: 'Wiraswasta', total: 30 },
  { job: 'Pelajar/Mahasiswa', total: 60 },
  { job: 'Ibu Rumah Tangga', total: 50 },
];

export default function JobTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">No.</th>
            <th className="p-3 border">Jenis Pekerjaan</th>
            <th className="p-3 border">Jumlah</th>
          </tr>
        </thead>/
        <tbody>
          {jobData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border">{index + 1}</td>
              <td className="p-3 border">{item.job}</td>
              <td className="p-3 border">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
