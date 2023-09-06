export interface RequestJWTApplicationTokenResponse {
  body: {
    access_token: string
  }
}

export interface RequestUserInfoResponse {
  accounts: {
    accountId: string
    isDefault: 'true' | 'false'
    baseUri: string
  }[]
}
