// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                spinSlow: 'spin 20s linear infinite',
                spinReverseSlow: 'spinReverse 20s linear infinite',
                'fade-in': 'fadeIn 0.8s ease-out',
            },
            keyframes: {
                spinReverse: {
                    from: { transform: 'rotate(360deg)' },
                    to: { transform: 'rotate(0deg)' },
                },
                fadeIn: {
                    from: { opacity: 0, transform: 'translateY(10px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};
