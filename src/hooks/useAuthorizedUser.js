import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const { data, error, loading } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });
  

  return { authorizedUser: data?.authorizedUser, loading, error};
};

export default useAuthorizedUser;