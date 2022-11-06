/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import 'react-native-gesture-handler';

import AuthStack from './src/navigation/Stack/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './Redux/Store/Store';
import BottomStack from './src/navigation/Bottom/Index';
import StepStack from './src/navigation/Stack/StepStack';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <AuthStack /> */}
        <BottomStack />
        {/* <StepStack /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;