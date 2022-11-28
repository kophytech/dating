import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import FormInput from '../../component/FormInput';
import {SelectList} from 'react-native-dropdown-select-list';
import {Gender, Religion, Statuss} from './Data';
import {step3Material} from '../../../Redux/Slice/StepSlice';
import Validator from 'validatorjs';
import FormButton from '../../component/FormButton';
import {useDispatch} from 'react-redux';

const Step3 = props => {
  const [errors, setError] = useState({});
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [value, setValues] = useState({
    state: '',
    city: '',
    mobile: '',
    height: '',
    religion: '',
    gender: '',
    status: '',
    country: 'Nigeria',
    body: 1,
    language: 'English',
  });

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    setloading(true);
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

    let rules = {
      state: 'required',
      city: 'required',
      mobile: 'required',
      height: 'required',
      religion: 'required',
      gender: 'required',
      status: 'required',
    };

    let validation = new Validator(value, rules, {
      'required.state': 'The State field is required.',
      'required.city': 'The city field is required.',
      'required.mobile': 'The Password field is required.',
      'required.height': 'The height field is required.',
      'required.religion': 'The religion field is required.',
      'required.status': 'The status field is required.',
      'required.gender': 'The gender field is required.',
    });

    if (validation.fails()) {
      setloading(false);
      setError(validation.errors.all());
    } else {
      dispatch(
        step3Material({
          state: value.state,
          city: value.city,
          mobile: value.mobile,
          height: value.height,
          religion: value.religion,
          gender: value.gender == 'Male' ? 4525 : 4526,
          status: value.status == 'Single' ? 1 : 2,
          country: 'Nigeria',
          body: 1,
          language: 'English',
          birthday: '20',
        }),
      )
        .unwrap()
        .then(data => {
          setloading(false);
          props.navigation.navigate('Bottom');
        })
        .catch(rejectedValueOrSerializedError => {
          console.log(
            rejectedValueOrSerializedError,
            'rejectedValueOrSerializedError',
          );
          setloading(false);
          // setMessageError(rejectedValueOrSerializedError.error.message);
        });
    }
  };

  // const onSubmit = () => {
  //   dispatch(
  //     step3Material({
  //       gender: value.gender,
  //       birthday: '20',
  //       country: 'Nigeria',
  //       height: value.height,
  //       language: 'English',
  //       mobile: value.mobile,
  //       state: value.state,
  //       city: value.city,
  //       religion: value.city,
  //       body: 3,s
  //       status: value.status,
  //     }),
  //   )
  //     .unwrap()
  //     .then(response => {
  //       console.log(response, 'slkandkn');
  //     });
  // };

  console.log('====================================');
  console.log(errors, 'lmmdlmalmldmlmalsmlsml');
  console.log('====================================');
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: WP(40)}}
    >
      <View style={styles.header}>
        <Image source={IMAGE_BODY.main} style={styles.header} />
      </View>
      <View>
        <Text style={styles.headerText}>NaijaConnect</Text>
      </View>
      <View style={{alignSelf: 'center', top: HP(4)}}>
        <FormInput
          placeholder="State"
          onChangeText={value => handleInputChange('state', value)}
        />
        <View style={styles.formInputContainer}>
          <FormInput
            placeholder="City"
            onChangeText={value => handleInputChange('city', value)}
          />
        </View>
        <View style={[styles.formInputContainer, {bottom: HP(5)}]}>
          <FormInput
            placeholder="Mobile"
            onChangeText={value => handleInputChange('mobile', value)}
            keyboardType="numeric"
          />
        </View>
        <View style={[styles.formInputContainer, {bottom: HP(8)}]}>
          <FormInput
            placeholder="Height (cm)"
            onChangeText={value => handleInputChange('height', value)}
            keyboardType="numeric"
          />
        </View>
        <View style={[styles.formInputContainer, {bottom: HP(7)}]}>
          <View style={styles.dropdownContainer}>
            <SelectList
              setSelected={value => handleInputChange('religion', value)}
              data={Religion}
              save="key"
              boxStyles={styles.boxStyles}
              label="Categories"
              placeholder="Select a Religion"
              inputStyles={styles.inputStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
            />
          </View>

          <View style={styles.dropdownContainer}>
            <SelectList
              setSelected={value => handleInputChange('gender', value)}
              data={Gender}
              save="value"
              boxStyles={styles.boxStyles}
              placeholder="Select a Gender"
              inputStyles={styles.inputStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
            />
          </View>

          <View style={styles.dropdownContainer}>
            <SelectList
              // onChangeText={value => handleInputChange('firstname', value)}
              setSelected={value => handleInputChange('status', value)}
              data={Statuss}
              save="value"
              boxStyles={styles.boxStyles}
              placeholder="Select a Status"
              inputStyles={styles.inputStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
            />
          </View>
        </View>
        <View>
          <Text style={styles.error}>{errors?.state}</Text>
          <Text style={styles.error}>{errors?.city}</Text>
          <Text style={styles.error}>{errors?.phone}</Text>
          <Text style={styles.error}>{errors?.height}</Text>
          <Text style={styles.error}>{errors?.religion}</Text>
          <Text style={styles.error}>{errors?.status}</Text>
          <Text style={styles.error}>{errors?.gender}</Text>
        </View>
        <View
          style={{top: Object.keys(errors).length == 0 ? HP(-38) : HP(-20)}}
        >
          <FormButton
            text="Submit"
            onPress={() => onSubmit()}
            loading={loading}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  header: {
    alignSelf: 'center',
    top: HP(5),
  },
  headerText: {
    color: COLOR.blackColor,
    fontSize: WP(6),
    bottom: HP(1),
    textAlign: 'center',
  },
  boxStyles: {
    borderRadius: WP(0),
    width: WP(90),
    height: HP(6),
    borderColor: COLOR.green,
  },
  dropdownContainer: {
    marginVertical: WP(4),
    alignSelf: 'center',
  },
  formInputContainer: {
    bottom: HP(3),
  },
  inputStyles: {fontSize: WP(3), top: HP(1.5), color: COLOR.blackColor},

  error: {
    color: COLOR.blackColor,
    textAlign: 'center',
    top: HP(-6),
    marginVertical: WP(2),
  },
  dropdownTextStyles: {
    color: COLOR.blackColor,
  },
});
