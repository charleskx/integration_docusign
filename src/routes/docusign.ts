import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ApiClient, EnvelopesApi, EnvelopeSummary } from 'docusign-esign'

import { env } from '../env'
import { generateAuthorizationURL } from '../utils/authorization'
import { templates } from '../mocks/templates'
import { envelop } from '../mocks/envelop'
import { scopes } from '../mocks/scopes'
import {
  RequestJWTApplicationTokenResponse,
  RequestUserInfoResponse,
} from '../types/docusignTypes'

const docuSign = new ApiClient()

docuSign.setOAuthBasePath(env.DOCUSIGN_OAUTH_SERVER.replace('https://', ''))

export async function docuSignRoutes(app: FastifyInstance) {
  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body }: RequestJWTApplicationTokenResponse =
        await docuSign.requestJWTUserToken(
          env.DOCUSIGN_INTEGRATION_KEY,
          env.DOCUSIGN_USER_ID,
          scopes,
          readFileSync(join(__dirname, '..', '..', 'private.key')),
          3600,
        )

      const { accounts }: RequestUserInfoResponse = await docuSign.getUserInfo(
        body.access_token,
      )

      const user = accounts.find((account) => account.isDefault === 'true')

      if (!user) {
        throw new Error('Failed to find active user data')
      }

      const { baseUri } = user

      docuSign.setBasePath(`${baseUri}/restapi`)
      docuSign.addDefaultHeader('Authorization', `Bearer ${body.access_token}`)

      const envelopes = new EnvelopesApi(docuSign)

      const envelopeDefinition = envelop(templates)

      const request: EnvelopeSummary = await envelopes.createEnvelope(
        env.DOCUSIGN_ACOUNT_ID,
        { envelopeDefinition },
      )

      reply.send(request)
    } catch (err: any) {
      const docuSignError = err.response && err.response.body

      if (docuSignError) {
        if (docuSignError.error && docuSignError.error === 'consent_required') {
          return { consent_url: generateAuthorizationURL(scopes) }
        }
      }

      reply.status(500).send({ error: 'Erro ao interagir com o DocuSign' })
    }
  })
}
