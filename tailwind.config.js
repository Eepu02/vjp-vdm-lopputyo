/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "sad-purple": "#7E6E8A",
                "happy-yellow": "#FCEA2B",
                "dragon-purple": "#37184F",
                "candyfloss-purple": "#9E92A7",
            },
            fontFamily:{
                'michroma': ['Michroma', 'sans-serif'],
                'urbanist': ['Urbanist', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
                'josefin': ['Josefin Sans', 'sans-serif'],
            }
            
        },
    },
    plugins: [],
};
