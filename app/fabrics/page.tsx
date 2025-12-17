'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fabrics = [
    { id: 1, name: 'Kanchipuram Silk', image: '/images/IMG-20251217-WA0006.jpg', desc: 'Pure handloom silk with certified zari.' },
    { id: 2, name: 'Banarasi Brocade', image: '/images/IMG-20251217-WA0007.jpg', desc: 'Opulent weaves perfect for heavy embroidery.' },
    { id: 3, name: 'Raw Silk', image: '/images/IMG-20251217-WA0013.jpg', desc: 'Textured perfection for structured garments.' },
    { id: 4, name: 'Organza', image: '/images/IMG-20251217-WA0009.jpg', desc: 'Sheer elegance for a dreamy look.' },
];

export default function FabricsPage() {
    return (
        <div className="min-h-screen pt-20 pb-20 px-6 md:px-12 lg:px-20 bg-background">
            <header className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-serif text-5xl md:text-7xl text-secondary mb-6"
                    >
                        Fine <span className="text-primary italic">Fabrics</span>
                    </motion.h1>
                    <p className="text-secondary/60 max-w-xl">
                        The foundation of every great outfit is the fabric. We source the finest materials from artisan clusters across India.
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="h-[1px] w-full bg-white/10 self-center"></div>
                </div>
            </header>

            <div className="space-y-32">
                {fabrics.map((fabric, index) => (
                    <div key={fabric.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                        <div className="w-full md:w-1/2 relative h-[500px] group overflow-hidden">
                            <Image
                                src={fabric.image}
                                alt={fabric.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <span className="text-primary text-6xl font-serif opacity-20">0{index + 1}</span>
                            <h2 className="font-serif text-4xl text-secondary">{fabric.name}</h2>
                            <p className="text-secondary/70 leading-relaxed text-lg">{fabric.desc}</p>
                            <button className="text-primary uppercase tracking-widest text-xs hover:text-white transition-colors">Enquire Availability</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
