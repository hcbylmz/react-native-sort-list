import React, {useEffect, useState} from 'react';
import AddItemStyle from './AddItem.style';
import {TouchableOpacity, TextInput, Text, View, FlatList} from 'react-native';
import ItemSeperator from './ItemSeperator';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ListItemStyle from '../ListItem/ListItem.style';
function AddItem() {
  const [itemName, setItemName] = useState('Test Item');
  const [itemPrice, setItemPrice] = useState('150');
  const [itemId, setItemId] = useState(0);
  const [sortState, setSortState] = useState('');
  const [list, setList] = useState([
    {itemName: itemName, itemPrice: itemPrice, itemId: itemId},
  ]);
  function onPress() {
    if (itemName !== '' && itemPrice !== '') {
      let newItemId = itemId;
      newItemId++;
      setItemId(newItemId);
      let newList = [
        ...list,
        {itemName: itemName, itemPrice: itemPrice, itemId: newItemId},
      ];

      if (sortState == 'Ascending') {
        sortItem('itemPrice', true, newList);
      }
      if (sortState == 'Descending') {
        sortItem('itemPrice', false, newList);
      }
      if (sortState == 'Date') {
        sortItem('itemId', true, newList);
      }
      if (sortState == '') {
        sortItem('itemId', true, newList);
      }
    } else {
      alert('Please insert required field...');
    }
  }

  function renderItem({item}) {
    return (
      <View style={AddItemStyle.item}>
        <Text style={AddItemStyle.showItemName}>{item.itemName}</Text>
        <Text style={AddItemStyle.showItemPrice}>{item.itemPrice} TL</Text>
      </View>
    );
  }
  function sortItem(comparison, asc, newList) {
    newList ? newList : (newList = [...list]);
    if (comparison == 'itemPrice' && asc) {
      newList.sort((a, b) => a.itemPrice - b.itemPrice);
      setList(newList);
    }
    if (comparison == 'itemPrice' && !asc) {
      newList.sort((a, b) => b.itemPrice - a.itemPrice);
      setList(newList);
    }
    if (comparison == 'itemId' && asc) {
      newList.sort((a, b) => a.itemId - b.itemId);
      setList(newList);
    }
  }

  function onPressAsc() {
    sortItem('itemPrice', true);
    setSortState('Ascending');
  
  }

  function onPressDesc() {
    sortItem('itemPrice', false);
    setSortState('Descending');
  }

  function onPressDate() {
    sortItem('itemId', true);
    setSortState('Date');
  }

  return (
    <View style={AddItemStyle.container}>
      <View style={ListItemStyle.container}>
        <View style={ListItemStyle.buttonContainer}>
          <ButtonComponent
            text={'Artan Fiyat'}
            style={sortState=='Ascending'?ListItemStyle.buttonActive:ListItemStyle.button}
            textStyle={sortState=='Ascending'?ListItemStyle.buttonTextActive:ListItemStyle.buttonText}
            onPress={onPressAsc}
          />
          <ButtonComponent
            text={'Azalan Fiyat'}
            style={sortState=='Descending'?ListItemStyle.buttonActive:ListItemStyle.button}
            textStyle={sortState=='Descending'?ListItemStyle.buttonTextActive:ListItemStyle.buttonText}
            onPress={onPressDesc}
          />
          <ButtonComponent
            text={'Tarih'}
            style={sortState=='Date'?ListItemStyle.buttonActive:ListItemStyle.button}
            textStyle={sortState=='Date'?ListItemStyle.buttonTextActive:ListItemStyle.buttonText}
            onPress={onPressDate}
          />
        </View>
        <View style={AddItemStyle.listContainer}>
          <FlatList
            data={list}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeperator}
          />
        </View>
        <View style={AddItemStyle.inputContainer}>
          <Text>Name</Text>
          <TextInput
            style={AddItemStyle.input}
            placeholder="Şapka"
            onChangeText={setItemName}
          />
          <Text>Price</Text>
          <TextInput
            style={AddItemStyle.input}
            placeholder="150"
            onChangeText={setItemPrice}
          />
          <ButtonComponent
            text={'Add'}
            style={AddItemStyle.button}
            textStyle={AddItemStyle.buttonText}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
}

export default AddItem;
