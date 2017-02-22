import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
} from 'react-native';
 
const Label = (props) => {
    return (
        <Text 
            style={props.style && props.style.textLabel ? props.style.textLabel : styles.textLabel}
        >
            {props.children}
            {props.text}
        </Text>
    );
}
 
const styles = StyleSheet.create({
    textLabel: {
        fontSize: 13,
        color: '#595856',
        backgroundColor:'transparent',
    }
});
 
export default Label;