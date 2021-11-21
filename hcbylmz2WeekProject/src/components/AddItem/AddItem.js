import React,{useState} from 'react';
import AddItemStyle from './AddItem.style'; 
import {TouchableOpacity,TextInput, Text,View} from 'react-native';

function AddItem() {

    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [list,setList] = useState([]);
   function onPress (){
console.log(itemName);
   };

  
    return (
     <View> 
       <Text>deneme</Text>
       <TextInput style={AddItemStyle.input} placeholder="Item Here" onChangeText={setItemName}/>
       <TextInput style={AddItemStyle.input} placeholder="Item Price Here" onChangeText={setItemPrice}/>
      <TouchableOpacity onPress={onPress} style={AddItemStyle.button}>
      <Text style={AddItemStyle.buttonText}>ADD ITEM</Text>
      </TouchableOpacity>
     </View>
    );
}

export default AddItem;
