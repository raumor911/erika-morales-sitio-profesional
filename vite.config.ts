import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function staticRoutesPlugin(): Plugin {
  return {
    name: 'static-routes-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;
      const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

      // 1. Static fallback for /perspectiva/
      const perspectivaDir = path.join(distDir, 'perspectiva');
      if (!fs.existsSync(perspectivaDir)) {
        fs.mkdirSync(perspectivaDir, { recursive: true });
      }
      const perspectivaHtml = baseHtml
        .replace(
          /<title>.*?<\/title>/,
          '<title>Perspectiva | Erika Morales — Criterio de Producto, IA y Transformación</title>'
        )
        .replace(
          /<link rel="canonical" href=".*?" \/>/,
          '<link rel="canonical" href="https://erikamorales.rauviaweb.mx/perspectiva/" />'
        );
      fs.writeFileSync(path.join(perspectivaDir, 'index.html'), perspectivaHtml);

      // 2. Static fallback for /como-puedo-ayudarte/
      const helpDir = path.join(distDir, 'como-puedo-ayudarte');
      if (!fs.existsSync(helpDir)) {
        fs.mkdirSync(helpDir, { recursive: true });
      }
      const helpHtml = baseHtml
        .replace(
          /<title>.*?<\/title>/,
          '<title>Cómo puedo ayudarte | Erika Morales — Producto, IA Generativa y Transformación</title>'
        )
        .replace(
          /<link rel="canonical" href=".*?" \/>/,
          '<link rel="canonical" href="https://erikamorales.rauviaweb.mx/como-puedo-ayudarte/" />'
        );
      fs.writeFileSync(path.join(helpDir, 'index.html'), helpHtml);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), staticRoutesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
