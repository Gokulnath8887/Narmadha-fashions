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
                        src="/images/custom-gift-bangles-04.jpg"
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
                {/* Story Section */}
                <div className="max-w-4xl mx-auto mb-32 text-center">
                    <h2 className="font-serif text-4xl text-secondary mb-8">The Art of Gifting</h2>
                    <p className="text-secondary/70 leading-relaxed font-light mb-12">
                        In a world of mass-produced items, a customized gift speaks volumes. At Narmadha Fashion Home, we specialize in creating bespoke hampers, embroidered keepsakes, and personalized fashion accessories that are perfect for weddings, anniversaries, and special milestones.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary font-serif italic text-xl">1</span>
                            <p className="text-secondary/80">Choose your fabric and color palette.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary font-serif italic text-xl">2</span>
                            <p className="text-secondary/80">Select embroidery motifs, names, or dates.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary font-serif italic text-xl">3</span>
                            <p className="text-secondary/80">We package it in our signature luxury boxes.</p>
                        </div>
                    </div>
                    <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-black text-sm uppercase tracking-widest hover:bg-white transition-all mt-12">
                        Start Customizing
                    </Link>
                </div>

                {/* Recent Creations */}
                <div className="mb-20">
                    <h2 className="font-serif text-4xl text-secondary text-center mb-12">Recent Creations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { src: '/images/custom-gift-bangles-01.jpg', alt: 'Customized Bangles Stack' },
                            { src: '/images/custom-gift-bangles-02.jpg', alt: 'Gold Bangles Flat Lay' },
                            { src: '/images/custom-gift-bangles-03.jpg', alt: 'Pink Designer Bangles' },
                            { src: '/images/custom-gift-bangles-04.jpg', alt: 'Pink and Orange Bangles' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[400px] overflow-hidden"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
