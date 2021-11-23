import React, {useState} from 'react';
import ListItemStyle from './ListItem.style';
import AddItem from '../AddItem/AddItem';
import {
  TouchableHighlight,
  TextInput,
  Text,
  View,
  FlatList,
} from 'react-native';

function ListItem() {
  function onPressAsc() {}

  function onPressDesc() {}

  function onPressDate() {}

  return (
    <View style={ListItemStyle.container}>
      <View style={ListItemStyle.buttonContainer}>
        <TouchableHighlight
          onPress={onPressAsc}
          style={ListItemStyle.button}
          underlayColor="gray">
          <Text style={ListItemStyle.buttonText}>Artan Fiyat</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressDesc} style={ListItemStyle.button}>
          <Text style={ListItemStyle.buttonText}>Azalan Fiyat</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressDate} style={ListItemStyle.button}>
          <Text style={ListItemStyle.buttonText}>Tarih</Text>
        </TouchableHighlight>
      </View>
    
     <AddItem />
     
     
     
        </View>
  );
}

export default ListItem;
