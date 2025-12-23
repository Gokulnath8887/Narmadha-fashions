import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsappButton from '@/components/WhatsappButton';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Narmadha Fashion Home | Luxury Couture & Bridal Design',
    description: 'Experience the epitome of luxury fashion at Narmadha Fashion Home. Bespoke bridal wear and elegant fabrics crafted for the modern muse.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="font-sans bg-background selection:bg-primary selection:text-black text-secondary">
                <SmoothScroll>
                    <Navbar />
                    <main className="min-h-screen relative z-10 pt-20">
                        {/* Added pt-20 to prevent content overlap with fixed navbar */}
                        {children}
                    </main>
                    <Footer />
                    <WhatsappButton />
                </SmoothScroll>
            </body>
        </html>
    );
}
