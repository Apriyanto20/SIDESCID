import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/hero-desa.jpg')` }}>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}

      {/* Navbar */}
      <Navbar />

      {/* Hero Text */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Sistem <span className="text-teal-400">Informasi</span><br />
            Desa Cidugaleun
          </h1>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Sistem <span className="text-teal-400">Informasi</span><br />
            Desa Cidugaleun
          </h1>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4.5A10.5 10.5 0 0 0 3.6 17.2L2 22l4.9-1.6A10.5 10.5 0 1 0 20 4.5zM12 19c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.9.9-3.1-.2-.3A7.96 7.96 0 1 1 12 19z" />
        </svg>
        Layanan Whatsapp Bot
      </a>
    </div>
  );
}
