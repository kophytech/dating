import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import {useDispatch} from 'react-redux';
import {getPrevious} from '../../../Redux/Slice/ChatSlice';
import moment from 'moment';

const ChatIndex = props => {
  const dispatch = useDispatch();
  const [listChat, setlLsChat] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = text => {
    console.log(text, 'aldnakdnkankndk');
    // Check if searched text is not blank
    if (text) {
      const newData = listChat.filter(function (item) {
        const itemData = item.to_name
          ? item.to_name.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });

      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(listChat);
      setSearch(text);
    }
  };

  console.log(filteredDataSource, 'filteredDataSourcefilteredDataSource');

  React.useEffect(() => {
    dispatch(getPrevious())
      .unwrap()
      .then(response => {
        setFilteredDataSource(response.data);
      })
      .catch(err => {
        showMessage({
          message: 'Something went wrong',

          type: 'danger',
        });
      });
  }, []);

  return (
    <View
      style={styles.container}
      contentContainerStyle={{paddingBottom: HP(130)}}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Feather name="arrow-left" size={32} color={COLOR.blackColor} />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: WP(5),
              right: WP(12),
            }}
          >
            Chat
          </Text>
        </View>
      </View>

      <View style={{top: 50}}>
        <View style={styles.searchIcon}>
          <Feather name="search" size={22} color={COLOR.grey} />
        </View>
        <TextInput
          placeholder="search"
          style={styles.textInput}
          placeholderTextColor="lightgrey"
          onChangeText={text => searchFilterFunction(text)}
        />
      </View>
      <View>
        {/* */}

        <View style={{top: HP(5)}}>
          <FlatList
            contentContainerStyle={{paddingBottom: WP(30)}}
            data={filteredDataSource}
            ListEmptyComponent={() => (
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  top: HP(10),
                  fontWeight: 'bold',
                }}
              >
                No Chat Found
              </Text>
            )}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => alert('dknakndkja')}
                  style={{
                    flexDirection: 'row',

                    marginTop: HP(2),
                    marginVertical: HP(2),
                    marginLeft: WP(3),
                    width: WP(50),
                  }}
                >
                  <Image source={IMAGE_BODY.avatar} style={styles.img} />
                  <View style={{top: HP(2), left: WP(3)}}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      {item?.to_name}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '300',
                        fontSize: WP(3),
                      }}
                    >
                      {item?.text}
                    </Text>

                    <View
                      style={{
                        alignSelf: 'flex-end',
                        left: WP(58),
                        width: WP(30),
                      }}
                    >
                      <Text style={styles.time}>
                        {moment(item?.created_at).startOf('hour').fromNow()}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ChatIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  header: {
    flexDirection: 'row',
    top: HP(3),
    justifyContent: 'space-between',
    width: WP(60),
    left: WP(3),
  },
  textInput: {
    backgroundColor: '#FAFAFA',
    width: WP(90),
    left: WP(5),
    borderWidth: WP(0.1),
    borderColor: COLOR.grey,
    paddingLeft: WP(12),
    borderRadius: WP(4),
  },
  time: {
    color: 'black', 
  },
  img: {
    width: WP(10),
    height: HP(5),
    top: HP(2),
  },
  searchIcon: { 
    position: 'absolute',
    left: WP(10),
    zIndex: 200,
    top: HP(2),
  },
});
