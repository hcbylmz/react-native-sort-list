import React from 'react';
import {TouchableHighlight,Text} from 'react-native';

function ButtonComponent(props) {
  return (
    <TouchableHighlight
      style={props.style}
      onPress={props.onPress}
      underlayColor="gray">
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableHighlight>
  );
}
export default ButtonComponent;