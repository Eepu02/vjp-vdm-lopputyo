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
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
