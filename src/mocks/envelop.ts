import { EnvelopeDefinition, TemplateRole } from 'docusign-esign'

import { env } from '../env'

export const envelop = (templateRoles: TemplateRole[]): EnvelopeDefinition => {
  return {
    templateId: env.DOCUSIGN_TEMPLATE_ID,
    status: 'sent',
    templateRoles,
  }
}
