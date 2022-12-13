import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  creditPaymentSlice,
  profileSlice,
} from '../../../Redux/Slice/ProfileSlice';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import FastImage from 'react-native-fast-image';
import {COLOR, HP, WP} from '../../utils/theme';
import TextCarousel from 'react-native-text-carousel';
import FormButton from '../../component/FormButton';
import {showMessage} from 'react-native-flash-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BootProfile = props => {
  const dispatch = useDispatch();
  const [profile, setProfile] = React.useState({});
  const [loading, setloading] = React.useState(false);
  console.log(profile, '1232');
  React.useEffect(() => {
    dispatch(profileSlice())
      .unwrap()
      .then(item => {
        setProfile(item);
      })
      .catch(err => {
        console.log(err, ' boot profile error');
      });
  }, []);

  const handleInputChange = (inputName, inputValue) => {
    setProfile({
      ...profile,
      [inputName]: inputValue,
    });
  };

  const onCreditPayment = () => {
    setloading(true);
    dispatch(
      creditPaymentSlice({
        price: 50,
        quantity: 20,
      }),
    )
      .unwrap()
      .then(response => {
        props.navigation.navigate('SuccessSCreen');
        setloading(false);
      })
      .catch(err => {
        showMessage({
          message: 'Something  Went wrong',
          type: 'danger',
        });
        setloading(false);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Bottom')}
        style={styles.icon}
      >
        <Ionicons name="arrow-back-sharp" size={32} color={COLOR.blackColor} />
      </TouchableOpacity>

      {/* arrow-back-sharp */}
      <FastImage
        style={{
          width: WP(70),
          height: HP(30),
          top: HP(5),
          borderRadius: WP(13),
          alignSelf: 'center',
        }}
        source={{
          uri: `${BASE_URL}` + '/' + `${profile.avater}`,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.subContainer}>
        <Text style={styles.name}>
          {profile?.first_name + ' ' + profile?.last_name}
        </Text>
        <Text style={styles.username}>@{profile?.username}</Text>

        <View style={styles.carousel}>
          <TextCarousel height={150}>
            <TextCarousel.Item>
              <View>
                <Text style={styles.text1}>Get matches faster</Text>
                <Text style={styles.text2}>
                  Boost your profile once a month!
                </Text>
              </View>
            </TextCarousel.Item>
            <TextCarousel.Item>
              <View>
                <Text style={styles.text1}>Swipe around the world!</Text>
                <Text style={styles.text2}>Swipe around the world!</Text>
              </View>
            </TextCarousel.Item>
            <TextCarousel.Item>
              <View>
                <Text style={styles.text1}>Boost your profile</Text>
                <Text style={styles.text2}>Put yourself First in Search</Text>
                {/*  */}
              </View>
            </TextCarousel.Item>
          </TextCarousel>
        </View>
      </View>
      <View style={styles.btn}>
        <FormButton
          text="Boost your profile"
          onPress={() => onCreditPayment()}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default BootProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  subContainer: {
    alignSelf: 'center',
    top: HP(10),
  },
  username: {
    color: COLOR.green,
    left: WP(15),
  },
  name: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    left: WP(1),
    fontWeight: 'bold',
    color: COLOR.blackColor,
    fontSize: WP(5),
  },

  carousel: {
    top: HP(6),
    left: WP(5),
  },
  text1: {
    fontWeight: 'bold',
    fontSize: WP(5),
    color: COLOR.blackColor,
  },
  text2: {
    color: COLOR.grey,
    fontWeight: '500',
  },
  btn: {
    alignSelf: 'center',
  },
  icon: {
    top: HP(2),
    left: WP(4),
  },
});
