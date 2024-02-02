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
      padding: {
        container_padding_mobile: "1rem",
        container_padding_desktop: "2rem",
        container_max_width_desktop: "80rem",
      },
      
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      
      backgroundImage: {
        "gradiant":"linear-gradient(0deg, rgba(251, 97, 23, 0.04) 0%, rgba(251, 97, 23, 0.04) 100%), #FFF",
        "header-forget-bassword": "url('../../Assets/SVGs/SingIn/Background pattern decorative.png')",
        "Input-Search": "url('../../Assets/SVGs/Dashboard/search-lg.svg')",

      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        Base: {
          Black: "#000000",
          White: "#FFFFFF",
        },
        Gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#182230",
          900: "#101828",
          950: "0C111D",
        },
        Brand: {
          25: "#FFF3EE",
          50: "#F9F5FF",
          100: "#FEEACD",
          200: "#FECE9B",
          300: "#E24D06",
          400: "#B692F6",
          500: "#9E77ED",
          600: "#FB5607",
          700: "#DA4A05",
          800: "#53389E",
          900: "#42307D",
          950: "#2C1C5F",
        },
        Error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#FB5607",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
          950: "#55160C",
        },
        Warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
          950: "#4E1D09",
        },
        Success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#DCFAE6",
          200: "#ABEFC6",
          300: "#75E0A7",
          400: "#47CD89",
          500: "#17B26A",
          600: "#079455",
          700: "#067647",
          800: "#085D3A",
          900: "#074D31",
          950: "#053321",
        },
      },
      fontSize: {
        "Text-xs": "0.75rem",
        "Text-sm": "0.875rem",
        "Text-md": "1rem",
        "Text-lg": "1.125rem",
        "Text-xl": "1.25rem",
        "Display-xs": "1.5rem",
        "Display-sm": "1.875rem",
        "Display-md": "2.25rem",
        "Display-lg": "3rem",
        "Display-xl": "3.75rem",
        "Display-2xl": "4.5rem",
      },
      fontWeight: {
        xs: "400",
        sm: "500",
        md: "600",
      },
      spacing: {
        0: "0rem",
        0.5: "0.125rem",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        80: "20rem",
        96: "24rem",
        120: "30rem",
        140: "35rem",
        160: "40rem",
        180: "45rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
        360: "90rem",
        400: "100rem",
        480: "120rem",
      },
      borderRadius: {
        radius_none: "0rem",
        radius_xxs: "0.125rem",
        radius_xs: "0.25rem",
        radius_sm: "0.375rem",
        radius_md: "0.5rem",
        radius_lg: "0.625rem",
        radius_xl: "0.75rem",
        radius_2xl: "1rem",
        radius_3xl: "1.25rem",
        radius_4xl: "1.5rem",
        radius_full: "",
      },
      width: {
        width_xxs: "20rem",
        width_xs: "24rem",
        width_sm: "30rem",
        width_md: "35rem",
        width_lg: "35rem",
        width_xl: "48rem",
        width_2xl: "64rem",
        width_3xl: "64rem",
        width_4xl: "90rem",
        width_5xl: "100rem",
        width_6xl: "120rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
