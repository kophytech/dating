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
} from './Data';
import {step3Material} from '../../../Redux/Slice/StepSlice';
import Validator from 'validatorjs';
import FormButton from '../../component/FormButton';
import {useDispatch, useSelector} from 'react-redux';
import {getCountry, getCountryState} from '../../../Redux/Slice/ProfileSlice';
import DatePicker from 'react-native-date-picker';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';

const Step3 = props => {
  const [errors, setError] = useState({});
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [listOfCountry, setlistOfCountry] = useState([]);
  const [listOfState, setlistOfState] = useState([]);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );

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
    let item = country.find(item => item.name === value.country);
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
      .catch(err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      });
  };

  //

  const [value, setValues] = useState({
    state: '',
    city: '',
    mobile: '',
    height: '',
    religion: '',
    gender: '',
    status: '',
    country: '',
    body: 1,
    language: 'English',
    about: '',
    ethnicity: '',
    education: '',
    country: '',
    address: '',
    birthday: '',
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
      mobile: 'required|numeric',
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

    let validation = new Validator(value, rules, {
      'required.state': 'The state field is required.',
      'required.mobile': 'The Phone Number field is required.',
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
        step3Material({
          state: value.state,
          city: value.state,
          mobile: value.mobile,
          height: value.height,
          religion: value.religion,
          gender: value.gender,
          status: value.status,
          country: value.country,
          body: 1,
          language: 'English',
          birthday: moment(value?.birthday).format('YYYY-MM-DD'),
          about: value.about,
          address: value.address,
          education: value.education,
          ethnicity: value.ethnicity,
          country: value.country,
          hobby: '1',
        }),
      )
        .unwrap()
        .then(data => {
          setloading(false);
          console.log('====================================');
          console.log(data);
          console.log('====================================');
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
  console.log(value, 'listOfStatelistOfState');
  console.log('====================================');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{height: HP(240)}}
    >
      <View style={styles.header}>
        <Image source={IMAGE_BODY.major} style={styles.img} />
      </View>

      <View style={[styles.dropdownContainer, {top: HP(6)}]}>
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
            placeholder="Height(cm)"
            onChangeText={value => handleInputChange('height', value)}
            keyboardType="numeric"
            error={errors?.height}
          />
        </View>

        <View style={{bottom: HP(3)}}>
          <View style={styles.formInputContainer}>
            <FormInput
              placeholder="Address"
              onChangeText={value => handleInputChange('address', value)}
              error={<Text>{errors?.address}</Text>}
            />
          </View>
          <View style={[styles.formInputContainer, {bottom: HP(7)}]}>
            <FormInput
              placeholder="Phone Number"
              onChangeText={value => handleInputChange('mobile', value)}
              keyboardType="numeric"
              error={<Text>{errors?.mobile}</Text>}
            />
          </View>

          <View style={[styles.formInputContainer, {bottom: HP(10)}]}>
            <FormInput
              placeholder="About me"
              onChangeText={value => handleInputChange('about', value)}
              maxLength={40}
              error={errors?.about}
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

          <View style={styles.dropdownContainer}>
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

          <View style={styles.dropdownContainer}>
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

          <View style={styles.dropdownContainer}>
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

          <View style={styles.dropdownContainer}>
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

          <View style={styles.dropdownContainer}>
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

          <View>
            <TextInput
              onTouchStart={() => setOpen(true)}
              placeholder="Date of Birth"
              style={styles.input}
              pointerEvents="none"
              placeholderTextColor={'black'}
              value={
                value?.birthday == ''
                  ? null
                  : moment(value?.birthday).format('YYYY-MM-DD')
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

        <View style={{top: HP(-20)}}>
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
});
