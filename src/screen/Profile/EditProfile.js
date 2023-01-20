import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import FormInput from '../../component/FormInput';
import {SelectList} from 'react-native-dropdown-select-list';

import {
  country,
  educations,
  ethnicityy,
  Gender,
  Religion,
  Statuss,
} from '../Steps/Data';

import {step3Material} from '../../../Redux/Slice/StepSlice';
import Validator from 'validatorjs';
import FormButton from '../../component/FormButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCountry,
  getCountryState,
  profileSlice,
  updateProfileSlice,
} from '../../../Redux/Slice/ProfileSlice';
import DatePicker from 'react-native-date-picker';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import {showMessage} from 'react-native-flash-message';
import AnimatedLoader from 'react-native-animated-loader';

const Step3 = props => {
  const [errors, setError] = useState({});
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [listOfCountry, setlistOfCountry] = useState([]);
  const [listOfState, setlistOfState] = useState([]);
  const [profile, setProfile] = useState({});

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const showPicker = useCallback(value => setShow(value), []);

  React.useEffect(() => {
    dispatch(profileSlice())
      .unwrap()
      .then(item => {
        setProfile(item);
      })
      .catch(err => {});
  }, []);

  React.useEffect(() => {
    let countries = country.map(state => {
      return {
        value: state.name,
        key: state.id,
      };
    });

    setlistOfCountry(countries);
  }, []);

  const onGetState = () => {
    let item = country.find(item => item.name === profile?.country);
    dispatch(getCountryState(item.id))
      .unwrap()
      .then(response => {
        let newState = response.map(item => {
          return {
            value: item.name,

            key: item.id,
          };
        });
        setlistOfState(newState);
      })
      .catch(err => {});
  };

  //

  const handleInputChange = (inputName, inputValue) => {
    setProfile({
      ...profile,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    setloading(true);
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

    let rules = {
      state: 'required',
      phone_number: 'required|numeric',
      height: 'required|numeric',
      religion: 'required',
      gender: 'required',
      status: 'required',
      about: 'required|string',
      ethnicity: 'required',
      education: 'required',
      country: 'required',
      address: 'required|string',
      birthday: 'required',
    };

    let validation = new Validator(profile, rules, {
      'required.state': 'The state field is required.',
      'required.phone_number': 'The Phone Number field is required.',
      'required.religion': 'The Religion field is required.',
      'required.height': 'The Height field is required.',
      'required.status': 'The Status field is required.',
      'required.gender': 'The Gender field is required.',
      'required.country': 'The Country field is required.',
      'required.about': 'The About field is required.',
      'required.ethnicity': 'The Ethnicity field is required.',
      'required.education': 'The Education field is required.',
      'required.address': 'The Address field is required.',
      'required.birthday': 'The Date of Birth field is required.',
    });

    if (validation.fails()) {
      // moment(value?.birthday).format('YYYY-MM-DD')
      setloading(false);
      setError(validation.errors.all());
    } else {
      dispatch(
        updateProfileSlice({
          state: profile.state,
          city: profile.state,
          phone_number: profile.phone_number,
          height: profile.height,
          religion: profile.religion,
          gender: profile.gender,
          status: profile.status,
          country: profile.country,
          body: 1,
          language: 'English',
          birthday: moment(profile?.birthday).format('YYYY-MM-DD'),
          about: profile.about,
          address: profile.address,
          education: profile.education,
          ethnicity: profile.ethnicity,
          country: profile.country,
          hobby: '1',
        }),
      )
        .unwrap()
        .then(data => {
          setloading(false);
          dispatch(profileSlice());

          showMessage({
            type: 'success',
            message: 'Profile Updated successfully',
          });

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

  console.log('====================================');
  console.log(profile);
  console.log('====================================');
  // if (Object.keys(profile).length == 0) {
  //   return (
  //     <View>
  //       <AnimatedLoader
  //         visible={true}
  //         overlayColor="rgba(255,255,255,0.75)"
  //         animationStyle={{color: COLOR.green}}
  //         speed={1}
  //       >
  //         <Text>Doing something...</Text>
  //       </AnimatedLoader>
  //     </View>
  //   );
  // }

  console.log('====================================');
  console.log(profile?.country, 'lnknkd');
  console.log('====================================');
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{height: HP(230)}}
    >
      <View style={styles.header}>
        <Image source={IMAGE_BODY.major} style={styles.img} />
      </View>

      <View style={[styles.dropdownContainer, {top: HP(6)}]}>
        <Text style={styles.title}>Select Your Country</Text>
        <SelectList
          // onChangeText={value => handleInputChange('firstname', value)}
          setSelected={value => handleInputChange('country', value)}
          data={listOfCountry}
          save="value"
          boxStyles={styles.boxStyles}
          placeholder="Select Your Country"
          inputStyles={styles.inputStyles}
          dropdownTextStyles={styles.dropdownTextStyles}
          onSelect={() => onGetState()}
        />
        <Text style={styles.error}>{errors?.country}</Text>
      </View>

      <View style={{alignSelf: 'center', top: HP(5)}}>
        <View style={styles.formInputContainer}>
          <FormInput
            placeholder="Height (cm)"
            onChangeText={value => handleInputChange('height', value)}
            keyboardType="numeric"
            error={errors?.height}
            value={profile?.height}
            label="Height (cm)"
          />
        </View>

        <View style={{bottom: HP(3)}}>
          <View style={styles.formInputContainer}>
            <FormInput
              placeholder="Address"
              onChangeText={value => handleInputChange('address', value)}
              error={<Text>{errors?.address}</Text>}
              value={profile?.address}
              label="Address"
            />
          </View>
          <View style={[styles.formInputContainer, {bottom: HP(7)}]}>
            <FormInput
              placeholder="Phone Number"
              onChangeText={value => handleInputChange('phone_number', value)}
              keyboardType="numeric"
              value={profile.phone_number}
              label="Phone Number"
              error={<Text>{errors?.phone_number}</Text>}
            />
          </View>
          <View style={[styles.formInputContainer, {bottom: HP(10)}]}>
            <FormInput
              placeholder="About me"
              onChangeText={value => handleInputChange('about', value)}
              maxLength={40}
              error={errors?.about}
              value={profile.about}
              label="About Me"
            />
          </View>
        </View>
        <View style={[styles.formInputContainer, {bottom: HP(12)}]}>
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
              search={false}
            />
            <Text style={styles.error}>{errors?.religion}</Text>
          </View>

          <View style={[styles.dropdownContainer, {bottom: HP(5)}]}>
            <Text style={styles.title}>Select Your Gender</Text>
            <SelectList
              setSelected={value => handleInputChange('gender', value)}
              data={Gender}
              save="key"
              boxStyles={styles.boxStyles}
              placeholder="Select a Gender"
              inputStyles={styles.inputStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
              search={false}
            />
            <Text style={styles.error}>{errors?.gender}</Text>
          </View>

          <View style={[styles.dropdownContainer, {bottom: HP(10)}]}>
            <Text style={styles.title}>Select Your Status</Text>
            <SelectList
              // onChangeText={value => handleInputChange('firstname', value)}
              setSelected={value => handleInputChange('status', value)}
              data={Statuss}
              save="key"
              boxStyles={styles.boxStyles}
              placeholder="Select a Status"
              inputStyles={styles.inputStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
              search={false}
            />
            <Text style={styles.error}>{errors?.status}</Text>
          </View>

          <View style={[styles.dropdownContainer, {bottom: HP(14)}]}>
            <Text style={styles.title}>Ethnicity</Text>
            <SelectList
              // onChangeText={value => handleInputChange('firstname', value)}
              setSelected={value => handleInputChange('ethnicity', value)}
              data={ethnicityy}
              save="key"
              boxStyles={styles.boxStyles}
              placeholder="Select Your Ethnicity"
              inputStyles={styles.inputStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
              search={false}
            />
            <Text style={styles.error}>{errors?.ethnicity}</Text>
          </View>

          <View style={[styles.dropdownContainer, {bottom: HP(20)}]}>
            <Text style={styles.title}>State</Text>
            <SelectList
              // onChangeText={value => handleInputChange('firstname', value)}
              setSelected={value => handleInputChange('state', value)}
              data={listOfState}
              save="value"
              boxStyles={styles.boxStyles}
              placeholder="Select Your state"
              inputStyles={styles.inputStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
            />
            <Text style={styles.error}>{errors?.state}</Text>
          </View>

          <View style={[styles.dropdownContainer, {bottom: HP(25)}]}>
            <Text style={styles.title}>Education</Text>
            <SelectList
              // onChangeText={value => handleInputChange('firstname', value)}
              setSelected={value => handleInputChange('education', value)}
              data={educations}
              save="key"
              boxStyles={styles.boxStyles}
              placeholder="Select Your Education Status"
              inputStyles={styles.inputStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
              search={false}
            />
            <Text style={styles.error}>{errors?.education}</Text>
          </View>

          <View style={[styles.dropdownContainer, {bottom: HP(30)}]}>
            <Text style={styles.title}>Select Of Date of birth</Text>
            <TextInput
              onTouchStart={() => setOpen(true)}
              placeholder="Date of Birth"
              style={styles.input}
              pointerEvents="none"
              placeholderTextColor={'black'}
              value={
                profile?.birthday == ''
                  ? null
                  : moment(profile?.birthday).format('YYYY-MM-DD')
              }
              // moment().format('L')
            />
            <Text style={styles.error}>{errors?.birthday}</Text>
            <DatePicker
              modal
              mode={'date'}
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                handleInputChange('birthday', date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </View>

        <View style={{marginTop: HP(-50)}}>
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
    borderRadius: WP(1),
    width: WP(90),
    height: HP(8),
    borderColor: COLOR.green,
    borderWidth: 0.6,
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
    color: COLOR.red,
    textAlign: 'center',
    bottom: HP(1),
    marginVertical: WP(2),
    right: WP(22),
  },
  dropdownTextStyles: {
    color: COLOR.blackColor,
  },
  input: {
    width: WP(90),
    borderColor: COLOR.green,
    borderWidth: HP(0.1),
    borderRadius: WP(1),
    padding: HP(2),
    marginBottom: 20,
    color: COLOR.blackColor,
    top: HP(2),
  },
  title: {color: 'black', marginVertical: 10, left: 3},
});
