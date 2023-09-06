import { env } from '../env'

export function generateAuthorizationURL(values: string[]): string {
  const scopes = values.join('+')

  return `${env.DOCUSIGN_OAUTH_SERVER}/oauth/auth?response_type=code&scope=${scopes}&client_id=${env.DOCUSIGN_INTEGRATION_KEY}&redirect_uri=${env.BASE_URL}`
}
