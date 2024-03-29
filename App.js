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
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './Redux/Store/Store';
import BottomStack from './src/navigation/Bottom/Index';
import StepStack from './src/navigation/Stack/StepStack';
import RootNavgiation from './src/navigation/RootNavgiation';
import FlashMessage from 'react-native-flash-message';
import {MenuProvider} from 'react-native-popup-menu';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <PaperProvider>
          <NavigationContainer>
            <RootNavgiation />
          </NavigationContainer>
          <FlashMessage position="top" />
        </PaperProvider>
      </MenuProvider>
    </Provider>
  );
};

export default App;
