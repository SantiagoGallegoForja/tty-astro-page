/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Extended primary palette (maintaining base colors)
        primary: {
          50: '#faf8f6',
          100: '#f5f0ec',
          200: '#ebe1da',
          300: '#d9c3b9',  // Base primary
          400: '#c8a89e',  // Primary hover
          500: '#b8917f',
          600: '#a07a68',
          700: '#8a6355',
          800: '#6e6765',  // Dark
          900: '#4a4342',
          DEFAULT: '#d9c3b9',
        },
        // Legacy aliases for compatibility
        'primary-hover': '#c8a89e',
        dark: '#6e6765',
        'dark-hover': '#5b5452',
        light: '#fefaf8',
        accent: '#c8a89e',
        'accent-light': '#e7d7cf',
        'accent-muted': '#d9cfc7',
        'border-muted': '#a99f9c',
        // New premium colors
        cream: '#fefaf8',
        gold: {
          50: '#fdfcf7',
          100: '#fbf7e8',
          200: '#f5ebc5',
          300: '#edd89c',
          400: '#e3c06a',
          500: '#c9a962',  // Main gold accent
          600: '#b8943f',
          700: '#9a7a35',
          800: '#7e6330',
          900: '#68522b',
          DEFAULT: '#c9a962',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          DEFAULT: '#4ade80',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          DEFAULT: '#f87171',
        },
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.2' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.3' }],
        'heading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-down': 'fadeDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'expand-width': 'expandWidth 0.3s ease-out forwards',
        'typing': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(217, 195, 185, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(217, 195, 185, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        expandWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(110, 103, 101, 0.08), 0 4px 6px -4px rgba(110, 103, 101, 0.05)',
        'soft-lg': '0 10px 40px -10px rgba(110, 103, 101, 0.15), 0 4px 6px -4px rgba(110, 103, 101, 0.05)',
        'soft-xl': '0 20px 50px -15px rgba(110, 103, 101, 0.2)',
        'glow-primary': '0 0 30px rgba(217, 195, 185, 0.4)',
        'glow-gold': '0 0 30px rgba(201, 169, 98, 0.3)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(110, 103, 101, 0.06)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
        'elevation-2': '0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1)',
        'elevation-3': '0 10px 15px rgba(0,0,0,0.05), 0 4px 6px rgba(0,0,0,0.1)',
        'elevation-4': '0 20px 25px rgba(0,0,0,0.05), 0 8px 10px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #d9c3b9 0%, #c8a89e 100%)',
        'gradient-dark': 'linear-gradient(135deg, #6e6765 0%, #4a4342 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #fefaf8 0%, #f5f0ec 50%, #ebe1da 100%)',
        'gradient-gold': 'linear-gradient(135deg, #c9a962 0%, #e3c06a 50%, #c9a962 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '4/3',
        'ultrawide': '21/9',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};
