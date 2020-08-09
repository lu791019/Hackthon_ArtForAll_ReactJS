import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import types from '../types'

export const useEnrolledActivityTickets = (artworkId: number) => {
  const { loading, error, data, refetch } = useQuery<types.GET_ARTWORK, types.GET_ARTWORKVariables>(
    gql`
      query GET_ARTWORK($artworkId: bigint!) {
        artwork_by_pk(id: $artworkId) {
          id
          featured_image
          description
          creator {
            id
            name
          }
          material
          name
          size
          speech
          years
        }
      }
    `,
    { variables: { artworkId } },
  )

  const artwork: {
    id: any
    name: string
    featuredImage: string | null
    description: string | null
    creator: {
      id: string | null
      name: string | null
    }
    material: string | null
    size: string | null
    years: number | null
    speech: string | null
  } | null =
    loading || error || !data || !data.artwork_by_pk
      ? null
      : {
          id: data.artwork_by_pk.id,
          name: data.artwork_by_pk.name,
          featuredImage: data.artwork_by_pk.featured_image,
          description: data.artwork_by_pk.description,
          creator: {
            id: data.artwork_by_pk.creator?.id || null,
            name: data.artwork_by_pk.creator?.name || null,
          },
          material: data.artwork_by_pk.material,
          size: data.artwork_by_pk.size,
          years: data.artwork_by_pk.years,
          speech: data.artwork_by_pk.speech,
        }

  return {
    loadingArtwork: loading,
    errorArtwork: error,
    refetchArtwork: refetch,
    artwork,
  }
}
