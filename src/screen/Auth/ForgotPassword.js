import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import FormInput from '../../component/FormInput';
import FormButton from '../../component/FormButton';
import {useDispatch, useSelector} from 'react-redux';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {forgotPassword, login} from '../../../Redux/Slice/AuthSlice';

const ForgotPassword = props => {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  const [errors, setError] = useState({});
  const dispatch = useDispatch();

  const [value, setValues] = useState({
    identifier: '',
  });

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    let rules = {
      identifier: 'required|email',
    };

    let validation = new Validator(value, rules, {
      'required.identifier': 'The Email field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      dispatch(
        forgotPassword({
          email: value.identifier,
        }),
      )
        .unwrap()
        .then(data => {
          // ResetPassword
          props.navigation.navigate('ResetPassword');
        })
        .catch(rejectedValueOrSerializedError => {
          console.log(rejectedValueOrSerializedError, 'rejecteddd');
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={IMAGE_BODY.signin} style={styles.img} />
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
  img: {
    width: WP(50),
    height: HP(30),
    alignSelf: 'center',
  },
});
