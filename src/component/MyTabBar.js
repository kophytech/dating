import {Animated, View, TouchableOpacity, StyleSheet} from 'react-native';
import {COLOR, WP} from '../utils/theme';

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '90%',
        height: 50,

        backgroundColor: 'lightgrey',
        borderRadius: 15,
        top: 420,
        zIndex: 1,
      }}
    >
      <View
        style={{
          width: WP(25),
          ...StyleSheet.absoluteFillObject,
          backgroundColor: COLOR.mainColor,
          height: WP(10),
          borderRadius: 12,
          top: 5,
          zIndex: 0.2,
          left: 10,
        }}
      ></View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              top: 250,
              zIndex: 130,
              width: WP(20),
              height: WP(10),
              borderRadius: 12,
              top: 5,
              zIndex: 0.2,
              marginHorizontal: 5,

              width: '40%',
              backgroundColor: isFocused ? 'green' : 'lightgreen',
            }}
          >
            <Animated.Text
              style={{
                color: isFocused ? 'white' : 'black',
                textAlign: 'center',
                top: 6,
              }}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
