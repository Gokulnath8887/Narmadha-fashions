
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Static assets
import aboutStoryImg from '../../public/images/IMG-20251217-WA0011.jpg';
import designerImg from '../../public/images/IMG-20251217-WA0012.jpg'; // Replaced missing

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-12 pb-20 px-6 md:px-12 lg:px-20 bg-background">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Intro Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h1 className="font-serif text-5xl md:text-7xl text-secondary leading-tight">
                            The Art of <br /> <span className="text-primary italic">Couture</span>
                        </h1>
                        <div className="w-24 h-[1px] bg-primary"></div>
                        <p className="text-secondary/80 text-lg leading-relaxed font-light">
                            Founded with a passion for intricate craftsmanship and timeless elegance, Narmadha Fashion Home has established itself as a beacon of luxury in the world of ethnic fashion.
                        </p>
                        <p className="text-secondary/60 leading-relaxed font-light">
                            Our journey began with a simple belief: that every piece of clothing should tell a story. A story of tradition, woven with modern aesthetics. From the hand-picked silks to the precise gold beadwork, every detail is a testament to our dedication to perfection.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] w-full rounded-sm overflow-hidden bg-gray-100"
                    >
                        <Image
                            src={aboutStoryImg} // Using another uploaded image
                            alt="About Narmadha Fashion"
                            fill
                            placeholder="blur"
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </section>

                {/* Philosophy Section */}
                <section className="text-center max-w-4xl mx-auto space-y-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-secondary">Our Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <span className="text-4xl text-primary font-serif">01</span>
                            <h3 className="text-xl uppercase tracking-widest text-secondary">Craftsmanship</h3>
                            <p className="text-secondary/60 text-sm">Honoring age-old techniques of embroidery and weaving.</p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-4xl text-primary font-serif">02</span>
                            <h3 className="text-xl uppercase tracking-widest text-secondary">Quality</h3>
                            <p className="text-secondary/60 text-sm">Sourcing only the finest silks and materials from across India.</p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-4xl text-primary font-serif">03</span>
                            <h3 className="text-xl uppercase tracking-widest text-secondary">Individuality</h3>
                            <p className="text-secondary/60 text-sm">Creating bespoke designs that reflect your unique personality.</p>
                        </div>
                    </div>
                </section>


                {/* Designer Spotlight */}
                <section className="bg-surface/30 p-8 md:p-16 rounded-sm border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-700 bg-gray-100 rounded-sm overflow-hidden">
                        <Image
                            src={designerImg} // Using another uploaded image 
                            alt="Designer at Work"
                            fill
                            placeholder="blur"
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl text-secondary">Meet the Creator</h2>
                        <p className="text-secondary/70 leading-relaxed">
                            With over a decade of experience in high-fashion couture, our lead designer brings a visionary approach to traditional ethnic wear. Her eye for detail and color harmony transforms simple fabrics into wearable art.
                        </p>
                        <div className="pt-4">
                            <p className="font-serif text-2xl text-primary italic">Narmadha</p>
                            <p className="text-xs uppercase tracking-widest text-secondary/50 mt-1">Founder & Creative Director</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
