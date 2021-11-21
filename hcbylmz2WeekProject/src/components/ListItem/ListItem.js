import React, {useState} from 'react';
import ListItemStyle from './ListItem.style';
import {TouchableHighlight, TextInput, Text, View, FlatList} from 'react-native';

function ListItem() {
const 
  function onPressAsc() {
    
  }

  function onPressDesc() {}

  function onPressDate() {}
 

  return (
    <View style={ListItemStyle.container}>
  
      <TouchableHighlight onPress={onPressAsc} style={ListItemStyle.button} underlayColor='white' >
        <Text style={ListItemStyle.buttonText}>Artan Fiyat</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={onPressDesc} style={ListItemStyle.button}>
        <Text style={ListItemStyle.buttonText}>Azalan Fiyat</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={onPressDate} style={ListItemStyle.button}>
        <Text style={ListItemStyle.buttonText}>Tarih</Text>
      </TouchableHighlight>
    </View>
  );
}

export default ListItem;
