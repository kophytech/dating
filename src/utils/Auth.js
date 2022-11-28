import * as React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Redirect() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.replace('Login');
  }, []);
}

export default Redirect;
