import {createStackNavigator} from '@react-navigation/stack';
import ForgotPassword from '../../screen/Auth/ForgotPassword';
import Login from '../../screen/Auth/Login';
import Otp from '../../screen/Auth/Otp';
import Register from '../../screen/Auth/Register';
import ResetPassword from '../../screen/Auth/ResetPassword';
import Splash from '../../screen/Auth/Splash';
import Step1 from '../../screen/Steps/Step1';
import Step2 from '../../screen/Steps/Step2';
import Step3 from '../../screen/Steps/Step3';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="Step3" component={Step3} />
      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Step2" component={Step2} />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Otp" component={Otp} />
      {/* 
      

     

    
    */}
      {/*  */}
    </Stack.Navigator>
  );
};

export default AuthStack;
