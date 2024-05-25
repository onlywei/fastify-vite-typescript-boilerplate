import { resolve } from 'node:path';
import Fastify from 'fastify';
import FastifyVite from '@fastify/vite'

const server = Fastify({ logger: true })

await server.register(FastifyVite, {
	root: resolve(import.meta.dirname, '../'),
	dev: process.argv.includes('--dev'),
	spa: true,
})

server.get('/some/where/', (req, reply) => {
	return reply.html()
});

await server.vite.ready()

try {
	await server.listen({ host: 'localhost', port: 3000 });
} catch (err) {
	server.log.error(err);
	process.exit(1);
}
