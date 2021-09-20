import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query($after: String, $first: Int, $orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!, $searchKeyword: String ) {
    repositories(after: $after, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword ) {
      edges{
        node{
          ...RepositoryDetail
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query($first: Int, $after: String, $id: ID!){
    repository( id: $id ){
      ...RepositoryDetail
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const AUTHORIZED_USER = gql `
  query{
    authorizedUser{
      id
      username
    }
  }
`;

