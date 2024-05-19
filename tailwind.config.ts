import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        slide1: "url('/assets/images/slides/s1.jpeg')",
        slide2: "url('/assets/images/slides/s2.jpeg')",
        slide3: "url('/assets/images/slides/s3.jpeg')",
        slide4: "url('/assets/images/slides/s4.jpeg')",
        slide5: "url('/assets/images/slides/s5.jpeg')",
        slide6: "url('/assets/images/slides/s6.jpeg')",
        slide7: "url('/assets/images/slides/s7.jpeg')",
        "not-found": "url('/assets/images/404.jpg')",
        "about-us": "url('/assets/images/about-us.jpeg')",
      },
      fontFamily: {
        logo: ["Helvetica", "Gilroy-bold", "sans-serif"],
        heading: ["Gilroy-bold", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        gradient: {
          start: "#25326F",
          end: "#2532DF",
        },
        black: "#1C1C1C",
        white: "#FFFFFF",
        dark: "#2E3D48",
        "light-gray": "#F8FAFB",
        blue: "#1D3A8A",
        secondary: "#1CA4B1",
        "light-blue": "#E9F4FF",
        gold: "#FCCB19",
        orange: "#EE7428",
        accent: "#EE7428",
        "accent-foreground": "#FFFFFF",
        "light-gold": "#FDDE6D",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
