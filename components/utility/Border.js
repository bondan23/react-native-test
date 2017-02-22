import React, { Component } from 'react';
 
import {
  View,
} from 'react-native';
 
const Border = (props) => {
    return (
        <View
          style={{
            backgroundColor: '#fff',
            borderColor: props.color ? props.color :"#dbdbdb",
            borderBottomWidth:1.5,
            alignItems:"center",
            justifyContent:"center"
          }} 
        />
    );
}
 
export default Border;