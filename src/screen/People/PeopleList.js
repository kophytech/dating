import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import UserImageComponent from '../../component/UserImageComponent';
import Modal from 'react-native-modal';
import ModalView from './ModalView';

const PeopleList = ({people}) => {
  const [userDetails, setUserDetails] = useState({});
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: WP(10)}}
        data={people.slice(0, 6)}
        numColumns={2}
        initialNumToRender={5}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: WP(40),
                marginVertical: WP(5),
                elevation: 100,
                shadowColor: 'grey',
                shadowOffset: {width: 0, height: 5},
                shadowRadius: 10,
                shadowOpacity: 0.5,
                elevation: 3,
                borderWidth: 0.4,
                height: HP(10),
                borderColor: COLOR.lightGrey,
                marginHorizontal: WP(4),
                right: HP(1),
              }}
              onPress={() => setUserDetails(item)}
            >
              <View style={styles.img}>
                <UserImageComponent item={item.avatar} />
              </View>
              <View style={styles.name}>
                <Text style={styles.first_name}>{item?.first_name}</Text>
                <Text style={styles.username}>@{item?.username}</Text>
                <Text style={styles.gender}>{item?.gender}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <View style={{bottom: HP(10)}}>
        <ModalView user={userDetails } />
      </View>
    </View>
  );
};

export default PeopleList;

const styles = StyleSheet.create({
  container: {
    top: HP(27),
    left: WP(5),
  },
  name: {
    top: HP(1),
    left: WP(3),
    alignSelf: 'center',
  },
  first_name: {
    fontWeight: 'bold',
    color: COLOR.blackColor,
  },
  img: {
    alignSelf: 'center',
  },
  username: {
    color: COLOR.blackColor,
    fontWeight: '300',
  },
  gender: {
    textTransform: 'capitalize',
    fontWeight: '100',
  },
});
