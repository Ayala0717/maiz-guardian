import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dirs: ['src/components', 'src/layouts'],
      dts: 'src/components.d.ts',
      extensions: ['vue', 'svg'],
      directoryAsNamespace: true,
      importPathTransform: (path: string) =>
        path.endsWith('.svg') ? `${path}?component` : undefined,
    }),
    vue(),
    Pages(),
  ],
})
