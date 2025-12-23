'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
    { id: 1, name: 'Royal Blue Beaded Gown', image: '/images/frock-blue-01.jpg' },
    { id: 2, name: 'Pink Lace Top with Skirt', image: '/images/frock-pink-02.jpg' },
    { id: 3, name: 'Nature Inspired Pleated Frock', image: '/images/frock-leaf-03.jpg' },
];

export default function FrocksPage() {
    return (
        <div className="min-h-screen pt-20 pb-20 px-6 md:px-12 lg:px-20 bg-background">
            <h1 className="font-serif text-5xl text-secondary mb-12">Frocks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="relative h-[500px] w-full mb-4 overflow-hidden">
                            <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <h3 className="font-serif text-xl text-secondary">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
