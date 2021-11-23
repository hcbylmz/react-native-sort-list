/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import ListItem from './src/components/ListItem/ListItem';
import {SafeAreaView} from 'react-native';

const App = ()=> {
 
  return (
    <SafeAreaView style={{flex:1}}>
      <ListItem/>
    </SafeAreaView>
  );
};



export default App;
