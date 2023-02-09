import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    // { path: "/products", component: "products" },
  ],

  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},

  proxy: {
    '/api': {
      target: 'localhost:8000',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
      onProxyReq: (a, b, c) => {
        console.log(a, b, c);
      },
    },
  },
});
