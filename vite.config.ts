import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { swc } from 'rollup-plugin-swc3'

export default defineConfig({
    plugins: [
        react(),
        swc({
            jsc: {
                parser: {
                    syntax: 'typescript',
                    tsx: true,
                },
                transform: {
                    react: {
                        runtime: 'automatic',
                    },
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@components': '/src/components',
            '@assets': '/src/assets',
        },
    },
})
