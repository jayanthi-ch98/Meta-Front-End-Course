import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
      babel({
      filter: /\.js$/, // tell it to transform .js files
      babelConfig: {
        presets: ['@babel/preset-react'],
      },
    }),
    ],

})
