'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                className="flex flex-col items-center gap-4"
            >
                <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center overflow-hidden relative">
                    <span className="font-serif text-primary text-3xl">N</span>
                </div>
                <span className="text-secondary text-xs uppercase tracking-[0.3em]">Loading</span>
            </motion.div>
        </div>
    );
}
