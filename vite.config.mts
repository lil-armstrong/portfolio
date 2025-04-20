import { defineConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dynamicImport from 'vite-plugin-dynamic-import'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const baseUrl = process.env.BASE_URL || '/portfolio/'
/**
 * @see {@link // https://vitejs.dev/config/}
 */
export default defineConfig((config) => {
  const mode = config.mode
  const userConfig: UserConfigExport = {
    ...config,
    plugins: [react(), dynamicImport(), tailwindcss()],
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
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    publicDir: './public',
  }

  return {
    ...userConfig,
    plugins: userConfig.plugins,
    appType: 'spa',
  }
})
