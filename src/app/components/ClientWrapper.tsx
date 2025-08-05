'use client';

import AOSWrapper from './AOSWrapper';
import Navbar from './navbar';
import Footer from './Footer';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <AOSWrapper>
            <Navbar />
            {children}
            <Footer />
        </AOSWrapper>
    );
}
