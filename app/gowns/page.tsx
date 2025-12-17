'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
    { id: 1, name: 'Evening Gown 01', image: '/images/IMG-20251217-WA0008.jpg' },
    { id: 2, name: 'Bridal Gown 02', image: '/images/IMG-20251217-WA0009.jpg' },
    { id: 3, name: 'Reception Gown 03', image: '/images/IMG-20251217-WA0010.jpg' },
];

export default function GownsPage() {
    return (
        <div className="min-h-screen pt-20 pb-20 px-6 md:px-12 lg:px-20 bg-background">
            <h1 className="font-serif text-5xl text-secondary mb-12">Gowns</h1>
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
