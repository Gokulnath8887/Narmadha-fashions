/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#1c1c1c",
                surface: {
                    DEFAULT: "#222222",
                    dark: "#262626",
                },
                primary: "#C9A24D",
                secondary: "#E6D8C3",
                footer: "#0F0F0F",
                whatsapp: "#25D366",
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                serif: ['var(--font-playfair)'],
            },
        },
    },
    plugins: [],
}
