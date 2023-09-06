import fastify from 'fastify'
import { env } from './env'
import { docuSignRoutes } from './routes/docusign'

const app = fastify()

app.register(docuSignRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is Running 🚀')
  })
