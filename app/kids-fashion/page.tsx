'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const kidsItems = [
    { id: 1, name: 'Pink Princess Gown', image: '/images/kids-pink-dress-01.jpg' },
    { id: 2, name: 'Blue Floral Tulle', image: '/images/kids-blue-floral-02.jpg' },
    { id: 3, name: 'Red Checks Pattu Pavadai', image: '/images/kids-red-pattu-03.jpg' },
    { id: 4, name: 'Royal Blue Velvet Vest Set', image: '/images/kids-blue-vest-04.jpg' },
];

export default function KidsFashionPage() {
    return (
        <div className="min-h-screen pt-20 pb-20 px-6 md:px-12 lg:px-20 bg-background">
            <div className="text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-5xl md:text-7xl text-secondary mb-6"
                >
                    Little <span className="text-primary italic">Wonders</span>
                </motion.h1>
                <p className="text-secondary/60 max-w-xl mx-auto">
                    Playful, comfortable, and oh-so-stylish. Our kids' collection is designed for the little moments that make big memories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {kidsItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl mb-4 border border-white/5 bg-surface/50">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                                <span className="text-white text-sm uppercase tracking-widest border-b border-white pb-1">View Details</span>
                            </div>
                        </div>
                        <h3 className="text-center font-serif text-xl text-secondary group-hover:text-primary transition-colors">{item.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
