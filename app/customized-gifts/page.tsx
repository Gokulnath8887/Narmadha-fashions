'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CustomizedGiftsPage() {
    return (
        <div className="min-h-screen pt-20 pb-20 px-6 md:px-12 lg:px-20 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Hero */}
                <div className="relative h-[60vh] w-full mb-20 overflow-hidden rounded-sm">
                    <Image
                        src="/images/IMG-20251217-WA0010.jpg"
                        alt="Customized Gifting"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
                        <div className="px-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="font-serif text-5xl md:text-7xl text-secondary mb-6"
                            >
                                Made for <span className="text-primary italic">You</span>
                            </motion.h1>
                            <p className="text-secondary/80 max-w-xl mx-auto text-lg">
                                Thoughtful, personalized, and crafted with love. Give a gift that tells a story.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-8">
                        <h2 className="font-serif text-4xl text-secondary">The Art of Gifting</h2>
                        <p className="text-secondary/70 leading-relaxed font-light">
                            In a world of mass-produced items, a customized gift speaks volumes. At Narmadha Fashion Home, we specialize in creating bespoke hampers, embroidered keepsakes, and personalized fashion accessories that are perfect for weddings, anniversaries, and special milestones.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary font-serif italic text-xl">1</span>
                                <p className="text-secondary/80">Choose your fabric and color palette.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary font-serif italic text-xl">2</span>
                                <p className="text-secondary/80">Select embroidery motifs, names, or dates.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary font-serif italic text-xl">3</span>
                                <p className="text-secondary/80">We package it in our signature luxury boxes.</p>
                            </div>
                        </div>
                        <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-black text-sm uppercase tracking-widest hover:bg-white transition-all mt-4">
                            Start Customizing
                        </Link>
                    </div>
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/images/IMG-20251217-WA0012.jpg"
                            alt="Gift Hamper Detail"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
