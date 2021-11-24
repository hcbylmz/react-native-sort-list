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
import ButtonComponent from '../ButtonComponent/ButtonComponent';

function ListItem() {
  function onPressAsc() {}

  function onPressDesc() {}

  function onPressDate() {}

  return (
    <View style={ListItemStyle.container}>
      <View style={ListItemStyle.buttonContainer}>
        <ButtonComponent
          text={'Artan Fiyat'}
          style={ListItemStyle.button}
          textStyle={ListItemStyle.buttonText}
          onPress={onPressAsc}
        />
        <ButtonComponent
          text={'Azalan Fiyat'}
          style={ListItemStyle.button}
          textStyle={ListItemStyle.buttonText}
          onPress={onPressDesc}
        />
        <ButtonComponent
          text={'Tarih'}
          style={ListItemStyle.button}
          textStyle={ListItemStyle.buttonText}
          onPress={onPressDate}
        />
      </View>

      <AddItem />
    </View>
  );
}

export default ListItem;
