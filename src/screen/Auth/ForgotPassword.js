import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOR, IMAGE_BODY, WP} from '../../utils/theme';
import FormInput from '../../component/FormInput';
import FormButton from '../../component/FormButton';
import {useDispatch, useSelector} from 'react-redux';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';

const ForgotPassword = () => {
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
      <View style={styles.imageContainer}>
        <Image source={IMAGE_BODY.forgot} />
        <View style={styles.subContainer}>
          <FormInput
            label="Email"
            onChangeText={value => handleInputChange('identifier', value)}
            error={errors.identifier}
          />
        </View>
        <View style={styles.buttonContainers}>
          <FormButton text="Reset Password" onPress={() => onSubmit()} />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  imageContainer: {
    left: WP(3),
    alignSelf: 'center',
  },
  buttonContainers: {
    bottom: WP(13),
    left: WP(-4),
  },
  subContainer: {
    left: WP(-3),
  },
});
