import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Google Extension',
    description: 'Chrome extension',
    permissions: ['activeTab'],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
