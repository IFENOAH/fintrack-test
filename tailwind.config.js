// tailwind.config.ts

const config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                fprimary: {
                    100: '#4B8B9F',
                    200: '#3A6C7B',
                    300: '#2A4B5D',
                },
                fsecondary: {
                    100: '#386776',
                    200: '#34616F',
                },
            }
        },
    },
    plugins: [],
}
export default config
