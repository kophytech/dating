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

const Index = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = React.useState({});

  React.useEffect(() => {
    dispatch(profileSlice())
      .unwrap()
      .then(item => {
        console.log(item, '99999');
        setProfile(item);
      })
      .catch(err => {
        console.log(err, '11111111111');
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.goPro}>
        <Text style={styles.goProText}>GO PRO</Text>
      </TouchableOpacity>
      <View style={{top: HP(40)}}>
        <FastImage
          style={{
            width: WP(60),
            height: HP(20),
            bottom: HP(3),
            borderRadius: WP(13),
          }}
          source={{
            uri: `${BASE_URL}` + '/' + `${profile.avater}`,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        {/* <Image
        source={IMAGE_BODY.splash}
        style={styles.image1}
        resizeMode="cover"
      /> */}
        <Text style={styles.name}>
          {profile.first_name + ' ' + profile.last_name}
        </Text>
        <Text style={styles.name1}>
          {profile?.country}
          <Text style={styles.name2}>{profile?.address}</Text>
        </Text>
        <View style={styles.subContanier}>
          <View>
            <Text style={styles.aboutMe1}>About Me</Text>
            <Text style={styles.aboutMeText}>{profile?.about}</Text>
          </View>

          {/* Info */}

          <View style={styles.infoContainer}>
            <Text style={styles.aboutMe1}>My Info</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                right: WP(3),
              }}
            >
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>{profile?.country}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                  {profile?.status == 1 ? 'Single' : 'Married'}
                </Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>{profile.height}cm</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                  {profile?.religion == '1' && 'Muslim'}
                  {profile?.religion == '2' && 'Atheists'}
                  {profile?.religion == '3' && 'Buddhist'}
                  {profile?.religion == '4' && 'Catholic'}
                  {profile?.religion == '6' && 'Hindu'}
                  {profile?.religion == '7' && 'Jewish'}
                  {profile?.religion == '8' && 'Agnostic'}
                  {profile?.religion == '9' && 'Sikh'}
                  {profile?.religion == '9' && 'Othes'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <View>
              <Card style={{width: WP(40), backgroundColor: COLOR.whiteColor}}>
                <Card.Title
                  title="People You Liked"
                  titleStyle={{color: COLOR.blackColor}}
                />
                <Card.Content>
                  <Text style={[styles.text1, {fontSize: HP(4)}]}>0</Text>
                </Card.Content>
              </Card>
            </View>

            <View>
              <Card
                style={{
                  width: WP(40),
                  right: WP(10),
                  backgroundColor: COLOR.whiteColor,
                }}
              >
                <Card.Title
                  title="People You Liked"
                  titleStyle={{color: COLOR.blackColor}}
                />
                <Card.Content>
                  <Text style={[styles.text1, {fontSize: HP(4)}]}>0</Text>
                </Card.Content>
              </Card>
            </View>
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
  aboutMe1: {
    fontSize: HP(2),
    fontWeight: '500',
    color: COLOR.blackColor,
  },
  aboutMeText: {
    fontSize: WP(4),
    maxWidth: WP(90),
    left: WP(5),
    color: COLOR.blackColor,
    marginVertical: HP(2),
  },
  infoBox: {
    width: WP(20),
    backgroundColor: 'black',
    padding: HP(1),
    borderRadius: WP(2),
    marginVertical: WP(3),
  },
  infoText: {
    color: COLOR.whiteColor,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: HP(3),
  },
  text1: {
    color: COLOR.blackColor,
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
});
