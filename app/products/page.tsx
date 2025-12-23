
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Static assets
import product01 from '../../public/images/blouse-red-sleeve-05.jpg';
import product02 from '../../public/images/blouse-cream-details-02.jpg';
import product03 from '../../public/images/IMG-20251217-WA0009.jpg';
import product04 from '../../public/images/IMG-20251217-WA0013.jpg';
import product05 from '../../public/images/blouse-purple-work-03.jpg';
import product06 from '../../public/images/blouse-cream-work-01.jpg';

// Dummy product data
const products = [
    { id: 1, name: 'Royal Golden Aari Work', category: 'Blouses', image: product01, price: '₹12,000' },
    { id: 2, name: 'Emerald Silk Embroidery', category: 'Blouses', image: product02, price: '₹15,000' },
    { id: 3, name: 'Magenta Bridal Luxe', category: 'Blouses', image: product03, price: '₹18,500' },
    { id: 4, name: 'Floral Motif Pattern', category: 'Blouses', image: product04, price: '₹9,500' },
    { id: 5, name: 'Peacock Design Heavy', category: 'Blouses', image: product05, price: '₹22,000' },
    { id: 6, name: 'Pastel Beadwork', category: 'Blouses', image: product06, price: '₹11,000' },
];

const categories = ['All', 'Blouses', 'Frocks', 'Gowns', 'Sarees'];

export default function ProductsPage() {
    return (
        <div className="min-h-screen pt-12 pb-20 px-6 md:px-12 lg:px-20 bg-background">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-serif text-5xl md:text-6xl text-secondary mb-4"
                        >
                            Collections
                        </motion.h1>
                        <p className="text-secondary/60 max-w-md">Explore our curated selection of bespoke ethnic wear, crafted with love and precision.</p>
                    </div>

                    {/* Simple Filter */}
                    <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        {categories.map((cat, i) => (
                            <button
                                key={cat}
                                className={`text-sm uppercase tracking-widest transition-colors whitespace-nowrap ${i === 0 ? 'text-primary' : 'text-secondary/50 hover:text-secondary'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative h-[450px] w-full overflow-hidden bg-surface mb-6 rounded-sm">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    placeholder="blur"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link href="/contact" className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-xs">
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-serif text-secondary group-hover:text-primary transition-colors">{product.name}</h3>
                                    <p className="text-xs uppercase tracking-widest text-secondary/50 mt-1">{product.category}</p>
                                </div>
                                <span className="text-primary font-medium">{product.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
