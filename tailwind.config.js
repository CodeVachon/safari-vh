/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                safariScreen: "var(--safari100vh, 100vh)"
            },
            minHeight: {
                safariScreen: "var(--safari100vh, 100vh)"
            },
            maxHeight: {
                safariScreen: "var(--safari100vh, 100vh)"
            }
        }
    },
    plugins: []
};
