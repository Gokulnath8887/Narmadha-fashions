
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Import images statically
import creamWork01 from '../../public/images/blouse-cream-work-01.jpg';
import creamDetails02 from '../../public/images/blouse-cream-details-02.jpg';
import purpleWork03 from '../../public/images/blouse-purple-work-03.jpg';
import redBack04 from '../../public/images/blouse-red-back-04.jpg';
import redSleeve05 from '../../public/images/blouse-red-sleeve-05.jpg';

const items = [
    { id: 1, name: 'Cream & Gold Aari Work', image: creamWork01 },
    { id: 2, name: 'Detailed Sleeve Embellishment', image: creamDetails02 },
    { id: 3, name: 'Lavender Floral Work', image: purpleWork03 },
    { id: 4, name: 'Red Bridal Back Design', image: redBack04 },
    { id: 5, name: 'Red Bridal Sleeve Detail', image: redSleeve05 },
];

export default function BlousesPage() {
    return (
        <div className="min-h-screen pt-20 pb-20 px-6 md:px-12 lg:px-20 bg-background">
            <h1 className="font-serif text-5xl text-secondary mb-12">Blouses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="relative h-[500px] w-full mb-4 overflow-hidden rounded-md bg-gray-100">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                placeholder="blur"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="font-serif text-xl text-secondary">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
