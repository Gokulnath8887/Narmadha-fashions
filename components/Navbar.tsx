'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Fabrics', href: '/fabrics' },
    { name: 'Frocks', href: '/frocks' },
    { name: 'Gowns', href: '/gowns' },
    { name: 'Tops', href: '/tops' },
    { name: 'Blouses', href: '/blouses' },
    { name: 'Kids Fashion', href: '/kids-fashion' },
    { name: 'Customized Gifts', href: '/customized-gifts' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 flex items-center justify-between',
                    scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                )}
            >
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-4 z-50 group">
                    <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center overflow-hidden bg-background relative">
                        <span className="font-serif text-primary text-xl relative z-10">N</span>
                    </div>
                    <span className="font-serif text-lg tracking-widest text-secondary group-hover:text-primary transition-colors uppercase">
                        Narmadha Fashion Home
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center gap-6">
                    {navItems.slice(0, 5).map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                "text-sm uppercase tracking-widest hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full",
                                pathname === item.href ? 'text-primary' : 'text-secondary'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-sm uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2"
                    >
                        More <span className="text-xl">+</span>
                    </button>
                    <Link
                        href="/contact"
                        className="ml-4 px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-all uppercase tracking-widest text-xs"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile / Full Menu Toggle */}
                <button
                    className="xl:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-[1px] bg-secondary group-hover:bg-primary transition-colors"
                        style={{ transformOrigin: "center" }}
                    ></motion.span>
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-[1px] bg-secondary group-hover:bg-primary transition-colors"
                    ></motion.span>
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-[1px] bg-secondary group-hover:bg-primary transition-colors"
                        style={{ transformOrigin: "center" }}
                    ></motion.span>
                </button>

            </nav>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>

                        <div className="flex flex-col items-center gap-4 md:gap-6 relative z-10 max-h-screen overflow-y-auto py-20 w-full no-scrollbar">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.05 * index, duration: 0.5, ease: "easeOut" }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={item.href}
                                        className="block w-full py-1 font-serif text-3xl md:text-5xl text-secondary hover:text-primary hover:italic transition-all duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
