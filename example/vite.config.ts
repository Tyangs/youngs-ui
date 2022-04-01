import path from 'path';
import react from '@vitejs/plugin-react';

const resolvePath = (r: string) => path.resolve(__dirname, r);

// https://vitejs.dev/config/
export default {
	plugins: [react()],
	server: {
		port: 3006,
		open: true,
	},
	optimizeDeps: {
		include: ['react/jsx-runtime'],
	},
	resolve: {
		alias: {
			'@tyangs/soft-ui': resolvePath('../'),
		},
	},
};
