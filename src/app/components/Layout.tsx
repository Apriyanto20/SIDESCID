// app/profil/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";

export default function ProfilLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="p-6">{children}</main>
    </div>
  );
}
