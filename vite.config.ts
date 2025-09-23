import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

function sourceEnv(mode: string) {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
}
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  sourceEnv(mode)

  return {
    plugins: [
      Components({
        dirs: ['src/components', 'src/layouts'],
        dts: 'src/components.d.ts',
        extensions: ['vue', 'svg'],
        directoryAsNamespace: true,
        importPathTransform: (path: string) =>
          path.endsWith('.svg') ? `${path}?component` : undefined,
      }),
      Pages(),
      WindiCSS(),
      VueI18nPlugin({
        include: [path.resolve(__dirname, 'src/locales/**')],
      }),
      vue(),
    ],
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
  }
})
