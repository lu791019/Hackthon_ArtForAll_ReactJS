import { notification } from 'antd'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'
import { v4 as uuidv4 } from 'uuid'

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors &&
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`, extensions)
      if (extensions && extensions.code === 'invalid-jwt') {
        notification.info({ message: '連線已過期，將重新整理此畫面' })
        setTimeout(() => window.location.assign('/'), 3000)
      }
    })

  networkError && console.log(`[Network error]: ${JSON.stringify(networkError)}`)
})

// create auth context link
const withAuthTokenLink = (authToken: string | null) =>
  setContext(() =>
    authToken
      ? {
          headers: { authorization: `Bearer ${authToken}` },
        }
      : {
          headers: {
            'x-hasura-app-id': process.env.REACT_APP_ID,
            'x-hasura-user-id': uuidv4(),
            'x-hasura-role': 'anonymous',
          },
        },
  )

const httpLink = createHttpLink({ uri: `https://${process.env.REACT_APP_GRAPHQL_HOST}/v1/graphql` })

export const createApolloClient = (options: { authToken: string | null }) => {
  const apolloClient = new ApolloClient({
    link: ApolloLink.from([onErrorLink, withAuthTokenLink(options.authToken), httpLink]),
    cache: new InMemoryCache(),
  })
  return apolloClient
}
