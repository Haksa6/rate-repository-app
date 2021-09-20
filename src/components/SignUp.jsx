import React from 'react';
import { StyleSheet, TouchableOpacity, View, } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import useCreateUser from '../hooks/useCreateUser';

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
  username: '',
  password: '',
  passwordConfirm: ''
};
const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="usernameField" name="username" placeholder="Username" style={styles.text}/>
      <FormikTextInput testID="passwordField" name="password" placeholder="Password" style={styles.text} />
      <FormikTextInput testID="passwordConfirmationField" name="passwordConfirm" placeholder="Password confirmation" style={styles.text} />
      <TouchableOpacity testID="signUpButton" style={styles.buttonBorder} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1).max(30)
    .required('Username is required'),
  password: yup
    .string()
    .min(5).max(50)
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirmation is required'),
});

export const SignUpContainer =({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


const SignUp = () => {
  const [signIn] = useSignIn();
  const [signUp] = useCreateUser();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password});
      await signIn({ username, password });
      
    } catch (e) {
      console.log(e);
    };
  };
  
  return <SignUpContainer onSubmit={onSubmit}/>;
  
};


export default SignUp;