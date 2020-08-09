/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ARTWORK
// ====================================================

export interface GET_ARTWORK_artwork_by_pk_creator {
  __typename: 'creator'
  id: any
  name: string
}

export interface GET_ARTWORK_artwork_by_pk {
  __typename: 'artwork'
  id: any
  images: any | null
  featured_image: string | null
  description: string | null
  /**
   * An object relationship
   */
  creator: GET_ARTWORK_artwork_by_pk_creator | null
  material: string | null
  name: string
  size: string | null
  speech: string | null
  years: number | null
}

export interface GET_ARTWORK {
  /**
   * fetch data from the table: "artwork" using primary key columns
   */
  artwork_by_pk: GET_ARTWORK_artwork_by_pk | null
}

export interface GET_ARTWORKVariables {
  artworkId: any
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
