import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/flowbite/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      tree: {
        100: '#47A025',
        200: '#6B0504',
        300: '#241023',
      },

    }
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    })
  ],
}
export default config
