import React from 'react';
import { StyleSheet, TouchableOpacity, View, } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';

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
};

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" style={styles.text}/>
      <FormikTextInput name="password" placeholder="Password" style={styles.text} secureTextEntry/>
      <TouchableOpacity style={styles.buttonBorder} onPress={onSubmit}>

        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});


const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;