import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        sourceMap: true,
        additionalData: `
        @import "/src/assets/styles/vars.scss";
        @import "/src/assets/styles/mixin.scss";
        @import "/src/assets/styles/icomoon.scss";
        ` 
      }
    }
  },

})

