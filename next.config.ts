import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ini akan menonaktifkan ESLint selama build
  },
  // Konfigurasi lainnya tetap bisa ditambahkan di sini
};

export default nextConfig;