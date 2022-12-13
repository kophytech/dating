import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {profileSlice} from '../../../Redux/Slice/ProfileSlice';
import FastImage from 'react-native-fast-image';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import FormButton from '../../component/FormButton';

const Index = props => {
  const dispatch = useDispatch();
  const [profile, setProfile] = React.useState({});
  console.log(profile, '11');
  React.useEffect(() => {
    dispatch(profileSlice())
      .unwrap()
      .then(item => {
        setProfile(item);
      })
      .catch(err => {});
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: HP(20)}}
    >
      {/* GoProSCreen */}
      <TouchableOpacity
        style={styles.goPro}
        onPress={() => props.navigation.navigate('GoProSCreen')}
      >
        <Text style={styles.goProText}>GO PRO</Text>
      </TouchableOpacity>
      <View style={{top: HP(40)}}>
        <FastImage
          style={{
            width: WP(70),
            height: HP(30),
            bottom: HP(30),
            borderRadius: WP(13),
            alignSelf: 'center',
          }}
          source={{
            uri: `${BASE_URL}` + '/' + `${profile.avater}`,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.details}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EditProfile')}
            style={[
              styles.goPro,
              {marginVertical: WP(2), top: HP(1), width: WP(30)},
            ]}
          >
            <Text style={[styles.goProText, {textAlign: 'center'}]}>
              EDIT PROFILE
            </Text>
          </TouchableOpacity>

          <Text style={styles.aboutMe}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View style={styles.hobieContainer}>
            <Text style={styles.header}>Hobbie</Text>
            <Text style={styles.hobText}>
              Computer Programming, Archery, Drawing, Chess, Poetry
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  image1: {
    height: HP(30),
    width: WP('100%'),
  },
  name: {
    fontSize: HP(3),
    color: COLOR.blackColor,
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: HP(1),
  },

  name1: {
    fontSize: HP(2),
    color: COLOR.blackColor,
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: HP(1),
    textTransform: 'capitalize',
  },

  name2: {
    fontWeight: '300',
    left: 20,
    marginHorizontal: WP(5),
    fontSize: WP(3),
    maxWidth: WP(70),
  },
  subContanier: {
    left: WP(5),
    marginVertical: HP(4),
  },

  details: {
    borderWidth: 0.1,
    bottom: HP(15),
    elevation: 500,
    height: HP(50),
    width: '100%',
    backgroundColor: COLOR.whiteColor,
    alignSelf: 'center',
    borderRadius: WP(3),
  },
  aboutMe: {
    color: COLOR.blackColor,
    textAlign: 'center',
    top: HP(3),
    maxWidth: WP(80),
    left: WP(7),
  },
  goPro: {
    alignSelf: 'flex-end',
    backgroundColor: COLOR.green,
    right: WP(3),
    width: WP(20),
    top: HP(3),
    padding: WP(2),
    borderRadius: WP(3),
  },
  goProText: {
    color: COLOR.whiteColor,
  },
  hobieContainer: {
    top: HP(7),
    left: WP(5),
  },
  header: {
    color: COLOR.blackColor,
    fontWeight: 'bold',
    fontSize: WP(4),
  },
  hobText: {
    color: COLOR.blackColor,
  },
});
