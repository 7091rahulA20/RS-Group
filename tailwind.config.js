export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172033',
        navy: '#12344d',
        steel: '#516477',
        guard: '#0f766e',
        amber: '#f59e0b',
        frost: '#f7fafc',
      },
      boxShadow: {
        executive: '0 24px 70px rgba(18, 52, 77, 0.14)',
        lift: '0 18px 38px rgba(18, 52, 77, 0.12)',
      },
      backgroundImage: {
        hero:
          'linear-gradient(120deg, rgba(18,52,77,.94), rgba(15,118,110,.72)), url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80")',
      },
    },
  },
  plugins: [],
};
