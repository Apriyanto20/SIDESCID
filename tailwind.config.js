/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                spinSlow: "spin 30s linear infinite",
                spinReverse: "spinReverse 30s linear infinite",
            },
            keyframes: {
                spinReverse: {
                    from: { transform: "rotate(360deg)" },
                    to: { transform: "rotate(0deg)" },
                },
            },
        },
    },
    plugins: [],
}
