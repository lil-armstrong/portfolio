import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig, UserConfigExport } from 'vite'
import dynamicImport from 'vite-plugin-dynamic-import'
import tailwindcss from '@tailwindcss/vite'

const baseUrl = process.env.BASE_URL || '/portfolio/'
// https://vitejs.dev/config/
export default defineConfig((config) => {
  const mode = config.mode
  const defaultPlugin = [react(), dynamicImport(), tailwindcss()]
  const userConfig: UserConfigExport = {
    ...config,
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
        plugins: [],
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
      ...userConfig,
      plugins: userConfig.plugins,
      appType: 'spa',
    }
  else {
    return {
      ...userConfig,
      plugins: userConfig.plugins,
    }
  }
})
