import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import FormInput from '../../component/FormInput';
import {HP, COLOR} from '../../utils/theme';
import FormButton from '../../component/FormButton';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../Redux/Slice/AuthSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = props => {
  const [errors, setError] = useState({});
  const [messageError, setMessageError] = useState();
  const [loading, setloading] = useState(false);

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
    setloading(true);
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
      setloading(false);
      setError(validation.errors.all());
    } else {
      dispatch(login(value))
        .unwrap()
        .then(data => {
          setloading(false);
          props.navigation.navigate('Bottom');
        })
        .catch(rejectedValueOrSerializedError => {
          setloading(false);
          setMessageError(rejectedValueOrSerializedError.error.message);
        });
    }
  };

  console.log(errors, 'jkjkjjjjj');

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: HP(20)}}>
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
          <FormButton
            text="Sign In"
            onPress={() => onSubmit()}
            loading={loading}
          />
        </View>

        <Text style={styles.error1}>{messageError}</Text>
      </View>
    </KeyboardAwareScrollView>
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
    color: COLOR.blackColor,
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
  error1: {
    textAlign: 'center',
    top: HP(-9),
    color: COLOR.red,
    marginVertical: HP(2),
  },
});
