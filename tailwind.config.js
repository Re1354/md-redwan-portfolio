export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#09090b',
        muted: '#71717a',
        surface: '#ffffff',
        background: '#ffffff',
        accent: {
          DEFAULT: '#065f46', // emerald-800
          soft: 'rgba(6, 95, 70, 0.1)',
        },
        line: '#e4e4e7',
        mist: '#fafafa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },

    },
  },
}
