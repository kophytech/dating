import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import {COLOR, HP, WP} from '../../utils/theme';

const RenderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <FastImage
        style={{
          width: WP(8),
          height: HP(4.5),

          borderRadius: WP(4),
          marginHorizontal: WP(2),
        }}
        source={{
          uri: `${BASE_URL}/${item?.notifier.avater}`,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      {/* */}
      <View>
        <Text style={{color: 'black'}}>
          {item?.notifier?.first_name + ' ' + item?.notifier?.last_name}
        </Text>
        <Text style={styles.text2}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    top: HP(4),
  },
  text: {
    fontWeight: 'bold',
    color: COLOR.blackColor,
    maxWidth: WP(50),
  },
  text2: {
    fontWeight: '800',
    color: COLOR.blackColor,
    maxWidth: WP(50),
  },
});
