import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={IMAGE_BODY.splash}
        style={styles.image1}
        resizeMode="cover"
      />
      <Text style={styles.name}>{'Omidiora Emmanuel'}</Text>
      <Text style={styles.name1}>
        Nigeria
        <Text style={styles.name2}> Ikeja, Lagos State</Text>
      </Text>
      <View style={styles.subContanier}>
        <View>
          <Text style={styles.aboutMe1}>About Me</Text>
          <Text
            style={
              styles.aboutMeText
            }>{`Lorem Ipsum is simply dummy text of tdkdkkks.
        `}</Text>
        </View>

        {/* Info */}

        <View style={styles.infoContainer}>
          <Text style={styles.aboutMe1}>My Info</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Women</Text>
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
              }}>
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
  },

  name2: {
    fontWeight: '300',
    left: 20,
    marginHorizontal: WP(5),
    fontSize: WP(3),
  },
  subContanier: {
    left: WP(5),
    marginVertical: HP(4),
  },
  aboutMe1: {
    fontSize: HP(3),
    fontWeight: '500',
    color: COLOR.blackColor,
  },
  aboutMeText: {
    fontSize: WP(4),
    maxWidth: WP(90),
    left: WP(5),
    color: COLOR.blackColor,
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
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: HP(3),
  },
  text1: {
    color: COLOR.blackColor,
  },
});
