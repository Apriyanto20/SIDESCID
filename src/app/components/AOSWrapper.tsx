'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

export default function AOSWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false, // set ke false biar animasi bisa muncul lagi
            mirror: true, // animasi juga terjadi saat scroll ke atas
        });

        setTimeout(() => {
            AOS.refreshHard(); // refresh total AOS, bukan sekadar update
        }, 100);
    }, [pathname]);

    return <>{children}</>;
}
