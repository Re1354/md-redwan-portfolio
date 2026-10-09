export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        paper: '#f9f9f8',
        ink: '#1b2340',
        muted: '#5d6579',
        subtle: '#8a91a3',
        line: '#e4e6ec',
        mist: '#f3f4f7',
        bone: '#eef0f5',
        accent: {
          DEFAULT: '#0e6b4f',
          light: '#6cc7a1',
        },
        night: {
          DEFAULT: '#121729',
          line: '#262d45',
          muted: '#a3aabd',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        signature: ['"Mrs Saint Delafield"', 'cursive'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(27,35,64,0.04), 0 10px 30px -14px rgba(27,35,64,0.14)',
        'soft-lg': '0 2px 4px rgba(27,35,64,0.04), 0 18px 40px -16px rgba(27,35,64,0.22)',
        panel: '0 1px 2px rgba(27,35,64,0.04), 0 16px 36px -18px rgba(27,35,64,0.18)',
        'panel-hover': '0 1px 2px rgba(27,35,64,0.05), 0 24px 44px -20px rgba(27,35,64,0.24)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
};
