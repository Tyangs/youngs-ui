import path from 'path';
import react from '@vitejs/plugin-react';

const resolvePath = (r: string) => path.resolve(__dirname, r);

// https://vitejs.dev/config/
export default {
	base: './',
	plugins: [react()],
	server: {
		port: 3007,
		open: true,
	},
	optimizeDeps: {
		include: ['react/jsx-runtime'],
	},
	resolve: {
		alias: {
			'youngs-ui': resolvePath('../src'),
		},
	},
	build: {
		outDir: '../site',
	},
};
