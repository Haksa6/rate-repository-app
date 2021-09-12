import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation ($username: String!, $password: String!){
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`
