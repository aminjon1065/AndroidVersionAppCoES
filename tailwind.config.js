/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "coes-blue": "#336091",
                "coes-dark": "#0F172A",
                "coes-gray-dark": "#18181B",
                "drawerActiveBackgroundDark": "#475569",
                "drawerActiveBackground": "#e8e5e5",
            }
        },
    },
    plugins: [],
}

