import Fastify from 'fastify'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const fastifyVite = require('../../index.js')

export async function main (dev) {
  const server = Fastify()

  await server.register(fastifyVite, {
    dev,
    root: import.meta.url,
    createRenderFunction () {
      return () => {}
    }
  })

  await server.vite.ready()

  return server
}
