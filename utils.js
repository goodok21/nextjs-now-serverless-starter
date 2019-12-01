import { useLayoutEffect, useEffect, useState } from 'react'
export { useLayoutEffect, useEffect, useState }
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

// export { default as styled } from 'styled-components'

export { default as cuid } from 'cuid'
export { default as moment } from 'moment'

export { withApollo } from 'lib/apollo'
export { default as gql } from 'graphql-tag'
export {
  useQuery,
  useLazyQuery,
  useMutation,
  useApolloClient
} from '@apollo/react-hooks'
export { useRouter } from 'next/router'
