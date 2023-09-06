import { TemplateRole, EnvelopeRecipientTabs } from 'docusign-esign'

export const tabs: EnvelopeRecipientTabs = {
  textTabs: [
    { tabLabel: 'document', value: '000.000.000-00' },
    { tabLabel: 'bolsa', value: '50%' },
    { tabLabel: 'beneficios', value: 'Isenção da matricula' },
  ],
}

export const templates: TemplateRole[] = [
  { email: 'jhon@yopmail.com', name: 'John Doe', roleName: 'aluno', tabs },
  { email: 'jane@yopmail.com', name: 'Jane Doe', roleName: 'responsavel' },
]
