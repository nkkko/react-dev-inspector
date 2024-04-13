import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const isBuild = Boolean(process.env.TAILWIND_BUILD)

/**
 * https://www.solid-ui.com/docs/installation/manual#configure-tailwindconfigjs
 */
export default {
  darkMode: ['class', '[data-kb-theme="dark"]'],
  content: isBuild
    ? [
      './src/**/*.{ts,tsx}',
      '!**/.stories/**/*',
      '!**/*.stories.tsx',
    ]
    : [
      './src/**/*.{ts,tsx}',
      './src/.stories/**/*.{ts,tsx}',
    ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'text-0': 'var(--color-text-0)',
        'text-1': 'var(--color-text-1)',
        'text-2': 'var(--color-text-2)',
        'text-3': 'var(--color-text-3)',
        'bg-0': 'var(--color-bg-0)',
        'bg-1': 'var(--color-bg-1)',
        'bg-2': 'var(--color-bg-2)',
        'bg-3': 'var(--color-bg-3)',
        'bg-hover-0': 'var(--color-bg-hover-0)',
        'bg-hover-1': 'var(--color-bg-hover-1)',
        'bg-hover-2': 'var(--color-bg-hover-2)',
        'bg-hover-3': 'var(--color-bg-hover-3)',
        'bg-active-0': 'var(--color-bg-active-0)',
        'bg-active-1': 'var(--color-bg-active-1)',
        'bg-active-2': 'var(--color-bg-active-2)',
        'bg-active-3': 'var(--color-bg-active-3)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          foreground: 'hsl(var(--error-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      boxShadow: {
        sm: 'var(--shadow-S1-down)',
        '': 'var(--shadow-S2-down)',
        md: 'var(--shadow-S3-down)',
        lg: 'var(--shadow-S4-down)',
        xl: 'var(--shadow-S5-down)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--kb-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--kb-accordion-content-height)' },
          to: { height: '0' },
        },
        'content-show': {
          from: {
            opacity: '0',
            transform: 'scale(0.96)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'content-hide': {
          from: {
            opacity: '1',
            transform: 'scale(1)',
          },
          to: {
            opacity: '0',
            transform: 'scale(0.96)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'content-show': 'content-show 0.2s ease-out',
        'content-hide': 'content-hide 0.2s ease-out',
      },
      fontFamily: {
        monospaced: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config

