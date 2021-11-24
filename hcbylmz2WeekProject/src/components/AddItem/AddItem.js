import React, {useState} from 'react';
import AddItemStyle from './AddItem.style';
import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  FlatList,

} from 'react-native';
import ItemSeperator from './ItemSeperator';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ListItemStyle from '../ListItem/ListItem.style'
function AddItem({onPressAsc}) {
  const [itemName, setItemName] = useState('Test Item');
  const [itemPrice, setItemPrice] = useState('150');
  const [list, setList] = useState([
    {itemName: itemName, itemPrice: itemPrice},
  ]);
  function onPress() {
    if (itemName !== '' && itemPrice !== '') {
      setList([...list, {itemName: itemName, itemPrice: itemPrice}]);
    } else {
      alert('Please insert required field...');
    }
  }
  onPressAsc(list);
  function renderItem({item}) {
    return (
      <View style={AddItemStyle.item}>
        <Text style={AddItemStyle.showItemName}>{item.itemName}</Text>
        <Text style={AddItemStyle.showItemPrice}>{item.itemPrice} TL</Text>
      </View>
    );
  }

  function onPressAsc() {
    console.log("deneme");
  }

  function onPressDesc() {}

  function onPressDate() {}
  return (
    <View style={AddItemStyle.container}>
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
      <View style={AddItemStyle.listContainer}>
            <FlatList data={list} renderItem={renderItem} ItemSeparatorComponent={ItemSeperator} />
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
          <ButtonComponent text={"Add"} style={AddItemStyle.button} textStyle={AddItemStyle.buttonText} onPress={onPress}/>
       
          </View>
          </View>
    </View>
  );
}

export default AddItem;
