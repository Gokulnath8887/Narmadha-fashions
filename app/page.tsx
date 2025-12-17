'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// Using the images we just copied to public/images
const heroImages = [
    '/images/IMG-20251217-WA0005.jpg',
    '/images/IMG-20251217-WA0006.jpg',
    '/images/IMG-20251217-WA0007.jpg',
];

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={containerRef} className="relative w-full">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Parallax Background Image */}
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                    <Image
                        src={heroImages[0]} // Using the first image as main hero
                        alt="Luxury Fashion Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-primary uppercase tracking-[0.3em] text-sm md:text-base"
                    >
                        Defined by Elegance
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-secondary leading-tight"
                    >
                        Narmadha Fashion <br /> <span className="italic text-primary">Home</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <Link
                            href="/products"
                            className="inline-block mt-8 px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
                        >
                            Explore Collection
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-widest text-secondary/70">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
                </motion.div>
            </section>

            {/* Philosophy / Intro Section */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-background relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary text-6xl font-serif block mb-8"
                    >
                        &ldquo;
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-2xl md:text-4xl text-secondary leading-snug"
                    >
                        We believe that fashion is not just about clothes, it's about <span className="text-primary italic">storytelling</span>. From intricate bridal weaves to contemporary couture, every piece is a masterpiece created for you.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="h-[1px] w-24 bg-primary"></div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Categories Spotlight */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 md:order-1 space-y-8 pr-0 md:pr-12">
                        <h3 className="font-serif text-4xl md:text-5xl text-secondary">
                            Bridal <br /> <span className="text-primary italic">Masterpieces</span>
                        </h3>
                        <p className="text-secondary/70 leading-relaxed font-light">
                            Handcrafted aari work, zardosi embellishments, and authentic silk fabrics. Our bridal collection is designed to make your special day truly unforgettable.
                        </p>
                        <Link href="/products" className="inline-flex items-center gap-3 text-primary uppercase tracking-widest text-xs border-b border-primary/30 pb-1 hover:border-primary transition-all">
                            View Bridal Collection
                        </Link>
                    </div>
                    {/* Image */}
                    <div className="order-1 md:order-2 relative h-[600px] w-full group overflow-hidden">
                        <Image
                            src={heroImages[1]} // Second image
                            alt="Bridal Masterpiece"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-32">
                    {/* Image */}
                    <div className="relative h-[600px] w-full group overflow-hidden">
                        <Image
                            src={heroImages[2]} // Third image
                            alt="Kids Fashion"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="space-y-8 pl-0 md:pl-12">
                        <h3 className="font-serif text-4xl md:text-5xl text-secondary">
                            Little <br /> <span className="text-primary italic">Royals</span>
                        </h3>
                        <p className="text-secondary/70 leading-relaxed font-light">
                            Soft fabrics, playful designs, and premium comfort. Our kids' collection brings out the charm in every little prince and princess.
                        </p>
                        <Link href="/kids-fashion" className="inline-flex items-center gap-3 text-primary uppercase tracking-widest text-xs border-b border-primary/30 pb-1 hover:border-primary transition-all">
                            Shop Kids Fashion
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 text-center bg-surface/30 mt-20">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="font-serif text-3xl md:text-5xl text-secondary mb-8">Ready to create something unique?</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-primary text-black font-medium text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
