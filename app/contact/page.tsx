'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Check } from 'lucide-react';

type FormData = {
    fullName: string;
    phone: string;
    email: string;
    message: string;
};

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="min-h-screen pt-12 pb-20 px-6 md:px-12 lg:px-20 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto"
            >
                <div className="text-center mb-20 space-y-4">
                    <h1 className="font-serif text-5xl md:text-7xl text-secondary">
                        Get in <span className="text-primary italic">Touch</span>
                    </h1>
                    <p className="text-secondary/60 max-w-xl mx-auto font-light">
                        Whether you have a question about our collections, need a custom design consultation, or just want to say hello, we'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-primary text-sm uppercase tracking-widest mb-4">Visit Our Boutique</h3>
                            <p className="font-serif text-2xl text-secondary leading-relaxed">
                                No. 123, Fashion Avenue,<br />Luxury District, Chennai,<br />Tamil Nadu, India.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-primary text-sm uppercase tracking-widest mb-4">Contact</h3>
                            <p className="text-secondary/80 text-lg">info@narmadhafashionhome.com</p>
                            <p className="text-secondary/80 text-lg">+91 91763 78418</p>
                        </div>
                        <div>
                            <h3 className="text-primary text-sm uppercase tracking-widest mb-4">Opening Hours</h3>
                            <p className="text-secondary/80">Mon - Sat: 10:00 AM - 8:00 PM</p>
                            <p className="text-secondary/80">Sun: By Appointment Only</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-surface/30 p-8 md:p-12 rounded-sm border border-white/5 relative overflow-hidden">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-surface z-20 text-center p-8"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-3xl text-secondary mb-2">Message Sent</h3>
                                <p className="text-secondary/60">Thank you for reaching out. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-8 text-primary text-sm uppercase tracking-widest hover:text-white transition-colors"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : null}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                            <div className="relative group">
                                <input
                                    {...register('fullName', { required: true })}
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-primary transition-colors"
                                />
                                {errors.fullName && <span className="text-red-400 text-xs absolute -bottom-5 left-0">Name is required</span>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative group">
                                    <input
                                        {...register('phone', { required: true })}
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-primary transition-colors"
                                    />
                                    {errors.phone && <span className="text-red-400 text-xs absolute -bottom-5 left-0">Phone is required</span>}
                                </div>
                                <div className="relative group">
                                    <input
                                        {...register('email', { required: true })}
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-primary transition-colors"
                                    />
                                    {errors.email && <span className="text-red-400 text-xs absolute -bottom-5 left-0">Email is required</span>}
                                </div>
                            </div>

                            <div className="relative group">
                                <textarea
                                    {...register('message', { required: true })}
                                    rows={4}
                                    placeholder="Tell us about your dream outfit..."
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-primary transition-colors resize-none"
                                ></textarea>
                                {errors.message && <span className="text-red-400 text-xs absolute -bottom-5 left-0">Message is required</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-black py-4 uppercase tracking-widest font-medium text-sm hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
