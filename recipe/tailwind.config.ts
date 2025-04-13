import type { Config } from "tailwindcss"   
const config: Config = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                rock: ['Rock Salt', 'sans-serif'],
                
            },
        },
    },
    plugins: [],
}
export default config;