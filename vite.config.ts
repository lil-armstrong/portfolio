import { defineConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dynamicImport from 'vite-plugin-dynamic-import'
import { resolve } from 'path'

const baseUrl = process.env.BASE_URL || '/portfolio/'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const defaultPlugin = [react(), dynamicImport()]
  const defaultConfig: UserConfigExport = {
    plugins: defaultPlugin,

    build: {
      outDir: 'build',
    },
    base: baseUrl,
    json: {
      namedExports: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
      postcss: {
        plugins: [require('autoprefixer'), require('tailwindcss')],
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    publicDir: './public',
  }
  if (mode == 'development')
    return {
      ...defaultConfig,
      plugins: [...defaultConfig.plugins],
      appType: 'spa',
    }
  else {
    return {
      ...defaultConfig,
      plugins: [...defaultConfig.plugins],
    }
  }
})
