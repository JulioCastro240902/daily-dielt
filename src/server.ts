import fastify from 'fastify'
import { dietRoutes } from './routes/dietRoutes'

export const app = fastify()

app.register(dietRoutes, {
  prefix: 'diet',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running! ✅')
  })
