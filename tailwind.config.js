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
                "army-green": "#7C8A6E",
                "wood": "#61554d",
                "blog": "#544d61",
            },
            
            fontFamily: {
                michroma: ["Michroma", "sans-serif"],
                urbanist: ["Urbanist", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                josefin: ["'Josefin Sans'", "sans-serif"],
                indieflower: ["'Indie Flower'", "sans-serif"],
            },
            boxShadow: {
                note: "inset 0 -40px 40px rgba(0,0,0,0.2), inset 0 25px 10px rgba(0,0,0,0.2), 0 5px 6px 5px rgba(0,0,0,0.2);",
            },
        },
    },
    plugins: [],
};
