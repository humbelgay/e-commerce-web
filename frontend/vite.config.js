
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),
    tailwindcss()
  ],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
});









// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'
// import react from "@vitejs/plugin-react";
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react(),
//   ],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/auth/, ''),
       
//       }
//     }
//   },
// })