module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        root: '#030712',
        surface: '#071025',
        'accent-blue': '#3b82f6',
        'accent-cyan': '#06b6d4',
        'status-green': '#22c55e',
        'border-subtle': '#1f2937',
        muted: '#9ca3af',
      },
    },
  },
  plugins: [],
};
