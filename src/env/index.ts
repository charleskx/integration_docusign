import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  PORT: z.number().default(3333),
  DOCUSIGN_OAUTH_SERVER: z.string(),
  DOCUSIGN_INTEGRATION_KEY: z.string(),
  DOCUSIGN_TEMPLATE_ID: z.string(),
  DOCUSIGN_ACOUNT_ID: z.string(),
  DOCUSIGN_USER_ID: z.string(),
  BASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const env = _env.data
