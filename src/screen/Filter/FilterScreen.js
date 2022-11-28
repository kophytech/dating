import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import RangeSlider from 'react-native-range-slider';
import {COLOR, HP, WP} from '../../utils/theme';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BodyType, Gender, LifeStyle, Religion} from './Data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormButton from '../../component/FormButton';
import {useDispatch} from 'react-redux';
import {filterSlice} from '../../../Redux/Slice/RandomSlice';

const FilterScreen = () => {
  const dispatch = useDispatch();
  const [genderSelectId, setGenderSelectId] = useState(null);
  const [religionSelectId, setReligionSelectId] = useState(null);
  const [lifeStyleSelectId, setLifeStyleSelectId] = useState(null);
  const [statusSelectId, setStatusSelectId] = useState(null);

  console.log(genderSelectId, 'setStatusSelectId');
  const FilterUser = () => {
    if (
      genderSelectId == null ||
      religionSelectId == null ||
      statusSelectId == null
    ) {
      Alert.alert('Select a Value');
    } else {
      dispatch(
        filterSlice({
          gender: genderSelectId,
          religion: religionSelectId,
        }),
      )
        .unwrap()
        .then(response => {
          console.log(response, '111');
        })
        .catch(err => {
          console.log(err, '444');
        });
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: WP(80)}}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" color={COLOR.blackColor} size={32} />
        </TouchableOpacity>
        <Text style={styles.filterText}>Filters</Text>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.genderContainer}>
          <Text style={styles.genderText}>Gender</Text>
          <View>
            {Gender.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: WP(60),
                    marginVertical: HP(3),
                    left: WP(5),
                    bottom: HP(4),
                    alignSelf: 'center',
                  }}
                >
                  <Text style={styles.list}>{item.gender}</Text>
                  <TouchableOpacity
                    style={{top: HP(10), width: WP(10)}}
                    onPress={() => setGenderSelectId(item.value)}
                  >
                    <FontAwesome
                      name={
                        item.value == genderSelectId ? 'circle' : 'circle-o'
                      }
                      color={
                        item.value == genderSelectId
                          ? COLOR.green
                          : COLOR.blackColor
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>

        <View style={[styles.genderContainer, {top: HP(3), height: HP(76)}]}>
          <Text style={styles.genderText}>Religion</Text>
          <View>
            {Religion.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: WP(60),
                    marginVertical: HP(3),
                    left: WP(5),
                    bottom: HP(4),
                  }}
                >
                  <Text style={styles.list}>{item.gender}</Text>
                  <TouchableOpacity
                    style={{top: HP(10), width: WP(10)}}
                    onPress={() => setReligionSelectId(item.value)}
                  >
                    <FontAwesome
                      name={
                        item.value == religionSelectId ? 'circle' : 'circle-o'
                      }
                      color={
                        item.value == religionSelectId
                          ? COLOR.green
                          : COLOR.blackColor
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>

        <View style={[styles.genderContainer, {top: HP(7), height: HP(30)}]}>
          <Text style={styles.genderText}>Status</Text>
          <View>
            {LifeStyle.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: WP(60),
                    marginVertical: HP(3),
                    left: WP(5),
                    bottom: HP(4),
                  }}
                >
                  <Text style={styles.list}>{item.gender}</Text>
                  <TouchableOpacity
                    style={{top: HP(10), width: WP(10)}}
                    onPress={() => setLifeStyleSelectId(item.value)}
                  >
                    {/* lifeStyleSelectId */}
                    <FontAwesome
                      name={
                        item.value == lifeStyleSelectId ? 'circle' : 'circle-o'
                      }
                      color={
                        item.value == lifeStyleSelectId
                          ? COLOR.green
                          : COLOR.blackColor
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>

        <View style={[styles.genderContainer, {top: HP(9), height: HP(60)}]}>
          <Text style={styles.genderText}>Body Type</Text>
          <View>
            {BodyType.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: WP(60),
                    marginVertical: HP(3),
                    left: WP(5),
                    bottom: HP(4),
                  }}
                >
                  <Text style={styles.list}>{item.gender}</Text>
                  <TouchableOpacity
                    style={{top: HP(10), width: WP(10)}}
                    onPress={() => setStatusSelectId(item.value)}
                  >
                    <FontAwesome
                      name={
                        item.value == statusSelectId ? 'circle' : 'circle-o'
                      }
                      color={
                        item.value == statusSelectId
                          ? COLOR.green
                          : COLOR.blackColor
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </View>

      <View style={styles.filterCon}>
        <FormButton text="Search" />
      </View>

      {/* <View>
        <View style={{backgroundColor: 'green', top: HP(10), left: WP(6)}}>
          <Text style={styles.text}>AGE</Text>
          <MultiSlider />
        </View>

        <View>
          <Text>Gender</Text>
        </View>
      </View> */}
    </ScrollView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.whiteColor,
    flex: 1,
  },
  text: {
    color: COLOR.blackColor,
    fontWeight: '700',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP(50),
    top: HP(2),
    left: WP(5),
  },
  filterText: {
    fontWeight: 'bold',
    color: COLOR.blackColor,
    top: HP(0),
    fontSize: WP(6),
  },
  subContainer: {
    top: HP(7),
    left: WP(6),
  },
  genderText: {
    color: COLOR.blackColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: WP(5),
    top: HP(3),
  },
  genderContainer: {
    alignSelf: 'center',
    right: WP(10),
    borderWidth: WP(0.2),
    width: WP(70),
    height: HP(30),
    borderRadius: WP(3),
    borderColor: COLOR.lightGrey,
  },
  list: {
    color: COLOR.blackColor,
    top: HP(10),
    fontWeight: 'bold',
  },
  filterCon: {
    marginTop: HP(12),
    alignSelf: 'center',
  },
});
