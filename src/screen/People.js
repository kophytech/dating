import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Flatlist,
} from 'react-native';
import React from 'react';
import {HP, IMAGE_BODY, WP} from '../utils/theme';
import InstaStory from 'react-native-insta-story';

const data = [
  {
    user_id: 1,
    user_image:
      'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    user_name: 'Ahmet Çağlar Durmuş',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Test User',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
];

const PeopleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.section1}>
          <TouchableOpacity>
            <Image
              source={IMAGE_BODY.main}
              style={{width: 75, height: 60, alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section2}>
          <Text style={styles.sectionText2}>
            Come on you beautiful hooman! Let’s go check on your Bonita
          </Text>
        </View>
        <View style={styles.section3}>
          <InstaStory
            data={data}
            duration={10}
            onStart={item => console.log(item)}
            onClose={item => console.log('close: ', item)}
            customSwipeUpComponent={
              <View>
                <Text>Swipe</Text>
              </View>
            }
            style={{marginTop: 30}}
          />
        </View>
      </View>

      <View style={styles.section4}>
        <View>
          <Text>Near You</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.text1}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  section1: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: HP(7),
    right: WP(2),
  },
  subcontainer: {
    top: HP(10),
  },
  section2: {
    top: HP(13),
    width: WP(90),
  },
  sectionText2: {
    textAlign: 'center',
    fontSize: HP(3),
    color: 'black',
    bottom: HP(12),
    left: WP(4),
  },
  section3: {
    left: WP(5),
  },
  section4: {
    top: HP(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP(85),
    left: HP(5),
  },
  text1: {
    color: 'pink',
    fontWeight: 'bold',
  },
});
