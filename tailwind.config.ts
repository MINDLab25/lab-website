import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#9333EA',
          pink: '#EC4899',
          orange: '#F97316',
        },
        ink: {
          DEFAULT: '#0D0D1A',
          secondary: '#374151',
          muted: '#6B7280',
          faint: '#9CA3AF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F9FAFB',
          border: '#E5E7EB',
          'border-strong': '#D1D5DB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      typography: {},
    },
  },
  plugins: [],
}

export default config
