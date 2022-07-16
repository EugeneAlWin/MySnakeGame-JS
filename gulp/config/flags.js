const isDev = process.argv.includes('--dev');
const isProd = !process.argv.includes('--dev');

export { isDev, isProd };
