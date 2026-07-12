import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "blob": {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "kenburns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.12) translate(-1.5%, -1.5%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "blob": "blob 7s infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "marquee": "marquee 40s linear infinite",
        "kenburns": "kenburns 18s ease-in-out infinite alternate",
      },
      backgroundImage: {
        'mesh-light': 'radial-gradient(at 40% 20%, hsla(197, 62%, 93%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(207, 70%, 95%, 1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(210, 20%, 98%, 1) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(207, 60%, 12%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(197, 55%, 15%, 1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(207, 50%, 8%, 1) 0px, transparent 50%)',
        // Stripe-inspired atmospheric mesh — horizontal wash across the top third
        // (blue → teal → warm cream → blue), settling into a soft cool off-white.
        // Recolored to our brand (cool blue/teal) instead of Stripe's indigo/ruby.
        'stripe-mesh-light': 'radial-gradient(at 6% 8%, hsla(207, 75%, 90%, 0.9) 0px, transparent 45%), radial-gradient(at 34% 4%, hsla(195, 80%, 85%, 0.65) 0px, transparent 50%), radial-gradient(at 60% 6%, hsla(38, 85%, 90%, 0.5) 0px, transparent 45%), radial-gradient(at 86% 4%, hsla(214, 72%, 88%, 0.8) 0px, transparent 48%), radial-gradient(at 50% 100%, hsla(210, 30%, 97%, 1) 0px, transparent 60%)',
        'stripe-mesh-dark': 'radial-gradient(at 6% 8%, hsla(207, 60%, 14%, 0.9) 0px, transparent 45%), radial-gradient(at 34% 4%, hsla(195, 55%, 16%, 0.6) 0px, transparent 50%), radial-gradient(at 60% 6%, hsla(38, 40%, 18%, 0.4) 0px, transparent 45%), radial-gradient(at 86% 4%, hsla(214, 55%, 13%, 0.8) 0px, transparent 48%), radial-gradient(at 50% 100%, hsla(210, 30%, 9%, 1) 0px, transparent 60%)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
