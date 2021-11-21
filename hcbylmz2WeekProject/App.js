/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AddItem from './src/components/AddItem/AddItem';
import ListItem from './src/components/ListItem/ListItem';
import {View,SafeAreaView} from 'react-native';

const App = ()=> {
 
  return (
    <SafeAreaView style={{flex:1,}}>
      <ListItem/>
<AddItem/>
    </SafeAreaView>
  );
};



export default App;
