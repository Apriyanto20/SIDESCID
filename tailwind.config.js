// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // pastikan path ini sesuai dengan struktur project kamu
    ],
    theme: {
        extend: {
            animation: {
                spinSlow: 'spin 20s linear infinite',
                spinReverseSlow: 'spinReverse 20s linear infinite',
            },
            keyframes: {
                spinReverse: {
                    from: { transform: 'rotate(360deg)' },
                    to: { transform: 'rotate(0deg)' },
                },
            },
        },
    },
    plugins: [],
};
