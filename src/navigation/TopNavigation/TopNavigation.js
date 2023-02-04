import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Index from '../../screen/Profile/Index';
import PeopleList from '../../screen/People/PeopleList';
import MyTabBar from '../../component/MyTabBar';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="About" component={Index} />
      <Tab.Screen name="Liked/Unliked" component={PeopleList} />
    </Tab.Navigator>
  );
};
export default TopNavigation;
