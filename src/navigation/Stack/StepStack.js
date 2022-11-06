import {createStackNavigator} from '@react-navigation/stack';
import Step1 from '../../screen/Steps/Step1';
import Step2 from '../../screen/Steps/Step2';

const Stack = createStackNavigator();

const StepStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Step1Stack" component={Step1} /> */}
      <Stack.Screen name="Step2Stack" component={Step2} />

      {/*  */}
    </Stack.Navigator>
  );
};

export default StepStack;
