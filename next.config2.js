/** @type {import('next').NextConfig} */
const nextConfig = {
  // Wymuszenie statycznego eksportu HTML
  output: 'export', 
  
  // Wymagane do działania 'output: export'
  distDir: 'out', 

  // Opcjonalne: wyłączenie strict mode dla łatwiejszego debugowania
  reactStrictMode: false,

  // Opcjonalne: konfiguracja base path, jeśli strona jest wdrażana w podkatalogu
  // basePath: process.env.NODE_ENV === 'production' ? '/nazwa-twojego-projektu' : undefined,
};

module.exports = nextConfig;
