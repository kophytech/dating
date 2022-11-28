import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Flatlist,
} from 'react-native';
import React from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
// import InstaStory from 'react-native-insta-story';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {randomSlice} from '../../../Redux/Slice/RandomSlice';
import PeopleList from './PeopleList';

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

const PeopleScreen = props => {
  const dispatch = useDispatch();
  const [people, setPeople] = React.useState([]);

  React.useLayoutEffect(() => {
    dispatch(randomSlice())
      .unwrap()
      .then(response => {
        console.log(response, '1200000000000000 ');
        setPeople(response);
      })
      .then(err => {
        console.log(err.response, 'e000000rro');
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.section1}>
          <TouchableOpacity>
            <Image
              source={IMAGE_BODY.main}
              style={{width: WP(11), height: WP(9), alignSelf: 'center'}}
            />
          </TouchableOpacity>

          <Ionicons name="ios-notifications-outline" size={35} color="black" />
        </View>

        <View style={styles.section2}>
          <Text style={styles.sectionText2}>
            Come on you beautiful hooman! Let’s go check on your Bonita
          </Text>
        </View>
        <View style={styles.section3}>
          {/* <InstaStory
            data={data}
            duration={10}
            onStart={item => console.log(item)}
            onClose={item => console.log('close: ', item)}
            customSwipeUpComponent={
              <View>
                <Text>Swipe</Text>
              </View>x
            }
            style={{marginTop: 30}}
          /> */}
        </View>
      </View>

      <View style={styles.section4}>
        <View>
          <Text style={{color: 'black', right: HP(3)}}>Near You</Text>
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('Discover')}>
          <Text style={styles.text1}>View All</Text>
        </TouchableOpacity>
      </View>

      <View>
        {people?.length == 0 ? (
          <Text style={{color: 'black', top: HP(23), textAlign: 'center'}}>
            No Friends
          </Text>
        ) : (
          <View style={styles.people}>
            <PeopleList people={people} />
          </View>
        )}
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

    bottom: HP(7),
    left: WP(7),
    justifyContent: 'space-between',
    width: WP(80),
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
    color: COLOR.green,
    fontWeight: 'bold',
  },
  people: {
    marginBottom: HP(6),
  },
});
