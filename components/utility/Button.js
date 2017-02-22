import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
 
const Button = (props) => {
     
    function getContent(){
        if(props.children){
            return props.children;
        }
        //return <Text style={props.styles.label}>{props.label}</Text>
        return <Text style={props.style.label}>{props.label}</Text>
    }

    function _onPress(){
      AlertIOS.alert(
       'Sync Complete',
       'All your data are belong to us.'
      );
    }
 
    return (
        <TouchableOpacity 
            activeOpacity={.5}
            style={props.NoDefaultStyle ? '' : styles.buttonWrap}
            onPress={()=>props.script ? props.script.onpress : _onPress()}
        >
          <View
            style={props.style ? props.style.view : ''}
          >
            {getContent()}
          </View>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    buttonWrap:{
        marginVertical: 10
    },
});
 
export default Button;