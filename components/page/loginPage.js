import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AlertIOS,
} from 'react-native';
import NavBar from 'react-native-navbar';

//MARK: Import Utility
import Button from '../utility/Button'
import Label from '../utility/Label'

//MARK: Import Component
import FirstPage from './firstPage';

const background = require('../../img/bg.jpg');
const logo = require('../../img/logo.png');

class LoginPage extends Component{
	static route(props) {
		return {
			id: 'LoginPage',
			component: LoginPage
		};
	}

	_onSubmit(){
      AlertIOS.alert(
       'Sync Complete',
       'All your data are belong to us.'
      );
    }

	render() {
	    return (
	      <Image 
	        style={[styles.background,styles.container]} 
	        resizeMode="cover"
	      >
	      <View style={[styles.logoWrap,styles.container]}>
	          <Image
	          source={logo}
	          />
	      </View>
	      <View style={styles.wrapper}>
	        <View style={styles.loginWrap}>
	            <Text
	              style={styles.loginText}
	            >
	            LOGIN 
	            </Text>
	        </View>

	        <View style={{
	          justifyContent:"center",
	          alignItems:"center"
	        }}>
	          <View style={styles.borderBlue} />
	        </View>

	        <View style={{
	          alignItems:"center",
	          justifyContent:"center",
	          marginBottom:25
	        }}>
	            <Text
	              style={{
	                fontSize:16,
	                fontFamily:"proximanova-regular"
	              }}
	            >
	              Don't wait. The time will never be just right.
	            </Text>
	        </View>

	        <View style={styles.inputWrap}>
	          <TextInput 
	            placeholder="Enter Your Email"
	            placeholderTextColor="#4a4a4a"
	            keyboardType="email-address"
	            style={styles.input}
	            underlineColorAndroid="transparent"
	            returnKeyType='next'
	          />
	        </View>
	        <View style={styles.inputWrap}>
	          <TextInput 
	            placeholder="Enter Your Password"
	            placeholderTextColor="#4a4a4a"
	            secureTextEntry
	            style={styles.input}
	            underlineColorAndroid="transparent"
	            returnKeyType='go'
	            onSubmitEditing={() => this.props.navigator.push(FirstPage.route())}
	          />
	        </View>
	        <View
	          style={{
	            justifyContent: 'center',
	            alignItems: 'center',
	            marginTop:10
	          }}
	        >
	          <TouchableOpacity 
	          	onPress={() => this.props.navigator.push(FirstPage.route())} 
	          	style={styles.button}
	          >
	            <Text style={styles.buttonText}>Sign In</Text>
	          </TouchableOpacity>
	        </View>
	        <Button 
	            label="Forgot your password ?"
	            style={{label:styles.forgotPasswordText}}
	          />
	      </View>
	      <View style={styles.container} />
	      </Image>
	    );
	  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background:{
    width:null,
    height:null,
    backgroundColor:"#FFF"
  },
  wrapper:{
    paddingHorizontal:10,
  },
  inputWrap:{
    flexDirection: "row",
    marginBottom: 10,
    height:40,
    backgroundColor:"transparent",
    borderBottomWidth:1,
    borderColor:"#16b0dd"
  },
  input:{
    flex:1,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    fontSize:16,
    fontFamily:"proximanova-regular",
    color:"#4a4a4a",
  },
  button:{
    backgroundColor: "#16b0dd",
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems:"center",
    justifyContent: "center",
    borderRadius:100,
    width:132
  },
  buttonText:{
    color:"#FFF",
    fontSize:18
  },
  forgotPasswordText:{
    color:'#16b0dd',
    backgroundColor:"transparent",
    textAlign:"center"
  },
  logoWrap:{
    backgroundColor:"transparent",
    alignItems:"center",
    justifyContent:"center"
  },
  loginWrap:{
    flexDirection: "row",
    height:40,
    backgroundColor:"transparent",
    alignItems:"center",
    justifyContent:"center"
  },
  borderBlue:{
    borderBottomColor:"#16b0dd",
    borderBottomWidth:3,
    borderStyle:"solid",
    marginBottom:25,
    marginTop:10,
    width:100
  },
  loginText:{
    fontSize:32,
    color:"#4a4a4a",
    fontFamily:"proximanova-light"
  }
});

export default LoginPage;