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

function AddItem() {
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
  function renderItem({item}) {
    return (
      <View style={AddItemStyle.item}>
        <Text style={AddItemStyle.showItemName}>{item.itemName}</Text>
        <Text style={AddItemStyle.showItemPrice}>{item.itemPrice} TL</Text>
      </View>
    );
  }

  return (
    <View style={AddItemStyle.container}>
    
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
  );
}

export default AddItem;
