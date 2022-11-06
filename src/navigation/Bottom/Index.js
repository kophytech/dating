import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from '../../screen/Discover/Discover';
import People from '../../screen/People';

const Tab = createBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Tab.Screen name="People" component={People} /> */}
      <Tab.Screen name="Discover" component={Discover} />
    </Tab.Navigator>
  );
}

export default BottomStack;
