import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import FormInput from '../../component/FormInput';
import {HP, COLOR} from '../../utils/theme';
import FormButton from '../../component/FormButton';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../Redux/Slice/AuthSlice';

const Login = () => {
  const [errors, setError] = useState({});

  console.log(errors, 'errors123');
  const dispatch = useDispatch();

  const [value, setValues] = useState({
    identifier: '',
    password: '',
  });

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    Validator.register(
      'strict',
      value => passwordRegex.test(value),
      'password must contain at least one  letter, number and a special character',
    );
    let rules = {
      identifier: 'required|email',
      password: 'required',
    };

    let validation = new Validator(value, rules, {
      'required.identifier': 'The Email field is required.',
      'required.password': 'The Password field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      dispatch(login(value))
        .unwrap()
        .then(data => {
          console.log(data, '11111');
        })
        .catch(rejectedValueOrSerializedError => {
          console.log(rejectedValueOrSerializedError, 'rejecteddd');
        });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.formContainer}>
          <Text style={styles.text1}>Let's Sign In</Text>
          <FormInput
            label="Email"
            onChangeText={value => handleInputChange('identifier', value)}
            error={errors.identifier}
          />
          <FormInput
            label="Password"
            name="password"
            onChangeText={value => handleInputChange('password', value)}
            error={errors.password}
            showIcon={true}
          />
        </View>
        <View style={styles.signUpContainer}>
          <FormButton text="Sign In" onPress={() => onSubmit()} />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  text1: {
    fontSize: HP(3),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: HP(3),
  },
  formContainer: {
    alignSelf: 'center',
    top: HP(4),
    marginVertical: HP(3),
  },
  signUpContainer: {
    alignSelf: 'center',
    bottom: HP(5),
  },
});
