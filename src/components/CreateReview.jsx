import React from 'react';
import { StyleSheet, TouchableOpacity, View, } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    paddingRight: 15,
    paddingLeft: 15,
  },
  buttonBorder: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding:10,
    marginTop: 11,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    borderColor: 'grey',
    paddingLeft: 10,
    height: 42,
  },
})

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
    repositoryName: yup
    .string()
    .required('Repository name is required'),
    rating: yup
    .number().min(0).max(100)
    .required('Rating is required'),
    review: yup
    .string()
});

const CreateReviewForm = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="ownerNameField" name="ownerName" placeholder="Repository owner name" style={styles.text}/>

      <FormikTextInput testID="repositoryNameField" name="repositoryName" placeholder="Repository name" style={styles.text}/>

      <FormikTextInput testID="ratingField" name="rating" placeholder="Rating between 0 and 100" style={styles.text}/>

      <FormikTextInput testID="reviewField" name="review" placeholder="Review" style={styles.text}/>

      <TouchableOpacity testID="createReviewButton" style={styles.buttonBorder} onPress={onSubmit}>

        <Text style={styles.buttonText}>Create a review</Text>
      </TouchableOpacity>
    </View>
  );
}

const CreateReviewContainer = ({onSubmit}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
}



const CreateReview = () => {
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    try {
      const { data } = await createReview({ repositoryName, ownerName, rating, text });
      console.log(data);
    } catch (e) {
      console.log(e);
    };
  };


  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;