"use client";

const educationData = [
  { level: 'Akademi/Diploma III/S. Muda', total: 12 },
  { level: 'Diploma I/II', total: 6 },
  { level: 'Diploma IV/Strata I', total: 52 },
  { level: 'SLTA/Sederajat', total: 307 },
  { level: 'SLTP/Sederajat', total: 42 },
];

const EducationTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">No.</th>
            <th className="p-3 border">Tingkat Pendidikan</th>
            <th className="p-3 border">Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border">{index + 1}</td>
              <td className="p-3 border">{item.level}</td>
              <td className="p-3 border">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable;
