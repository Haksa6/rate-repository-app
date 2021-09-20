import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

import { useHistory } from "react-router-dom";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const createReview = async ({repositoryName, ownerName, rating, text}) => {
    rating = parseInt(rating);
    const { data } = await mutate({ variables: { ownerName, repositoryName, rating, text }});
    console.log(data.createReview.repositoryId);
    
    history.push(`/${data.createReview.repositoryId}`);
  };

  return [createReview, result];
};

export default useCreateReview;