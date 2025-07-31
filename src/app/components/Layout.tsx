import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-28 bg-gray-100 min-h-screen">
        <main className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="bg-blue-800 text-white text-center py-4 mt-12">
          &copy; {new Date().getFullYear()} Desa Cidugaleun
        </footer>
      </div>
    </>
  );
}
