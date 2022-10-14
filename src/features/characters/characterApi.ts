import {  createApi } from '@reduxjs/toolkit/query/react'
import { gql } from 'graphql-request'
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query'


export interface Character {
    id:string,
    name:string,
    status:string,
    gender:string,
    species:string,
    image:string,
    location :{
        name:string,
        dimension:string
    }
}

export interface Pagination {
    count:number,
    pages:number,
    next:number,
    prev:number
  }
export interface Characters{
    info:Pagination,
    results:Character[]
}
export interface CharactersResponse {
    characters:Characters
}

export interface Episode{
    id:string,
    name:string,
    air_date:string,
}

export interface CharacterResponse {
    charactersByIds:{
        episode:Episode[]
    }[]
}



export const CharacterApi = createApi({
    reducerPath:'characters',
    baseQuery: graphqlRequestBaseQuery({url: 'https://rickandmortyapi.com/graphql'}),
    endpoints: (builder) => ({
        getCharacters: builder.query<CharactersResponse,{ page?: number }>({query: ({ page }) => ({
                    document: gql`
                        query getCharacters($page: Int = 1){
                            characters(page: $page) {
                            results {
                                id
                                name
                                status
                                gender
                                species
                                type,
                                image,
                                location {
                                name,
                                dimension
                                }
                            }
                            info {
                                count
                                pages
                                next
                                prev
                            }
                            }
                        }
                    `,
                    variables: {
                        page
                    },
                    })
                }),
        getCharacterById: builder.query<CharacterResponse,{ ids?: string[] | string | undefined }>({query: ({ ids }) => ({
            document: gql`
                query getCharacterById($ids: [ID!]!){
                    charactersByIds(ids:$ids){
                        created
                        episode {
                          id,
                          name,
                          air_date,
                        }
                      }
                }
            `,
            variables: {
                ids
            },
            })
        }),


    })
})
export const { useGetCharactersQuery ,useGetCharacterByIdQuery} = CharacterApi
