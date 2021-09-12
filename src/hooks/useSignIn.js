import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useHistory } from "react-router-dom";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(LOGIN);
  const apolloClient = useApolloClient();
  const history = useHistory();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password}});
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();  
    history.push('/');
  };

  return [signIn, result];
};

export default useSignIn;