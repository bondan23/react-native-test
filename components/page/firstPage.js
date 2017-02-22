import React, {Component} from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
  ScrollView,
  AlertIOS,
} from 'react-native'

import NavBar from 'react-native-navbar';

import SecondPage from './secondPage';
import LoginPage from './loginPage';

import Border from '../utility/Border';
import Label from '../utility/Label';


var Fabric = require('react-native-fabric');
var { Crashlytics,Answers } = Fabric;

var axios = require('axios')

const location = require('../../img/location.png');
const suitcase = require('../../img/suitcase.png');
const userpicture = require('../../img/user.png');

class FirstPage extends Component {
  static route(props) {
    return {
      id: 'FirstPage',
      component: FirstPage
    };
  }
  
  _reviewedPress(){
    /*var link = 'http://qerja.com/api-qolega/';
    axios.get(link+'/industries')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });*/
    
    AlertIOS.alert(
       'Review Complete',
       'All your data are belong to us.'
    );
  }

  render() {
    const titleConfig = {
      title: 'QOLEGA - Job List',
      tintColor: '#ffffff'
    };

    const leftButtonConfig = {
      title: 'Previous',
      tintColor: '#ffffff',
      handler: () => this.props.navigator.pop(),
    }

    return (
      <View 
        style={styles.container}
      >
        <NavBar 
          title={titleConfig}
          style={{
            backgroundColor:"#16b0dd"
          }}
          leftButton={leftButtonConfig}
        />
        
        <View
          style={{
            backgroundColor: '#fff',
            borderColor:"#b3b3b3",
            borderBottomWidth:1.5,
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          <Text
            style={{
              paddingVertical:5
            }}
          >
          123 Jobs Found
          </Text>
        </View>
        
        <ScrollView>
        
        {/* Content 1 Start Here */}
        <View style={styles.content}>
          <View>
            <Text
              style={{
                fontFamily:'proximanova-semibold',
                fontSize:16,
                marginBottom:7
              }}
            >
              Senior UX Architect (Content Planning, Interaction Design)
            </Text>
            
            <Text
              style={{
                fontFamily:'proximanova-regular',
                fontSize:14,
                color:"#b3b3b3",
                marginBottom:5
              }}
            >
              <Image
                source={location}
                style={{
                  width:14,
                  height:14,
                }}
              />
              &nbsp;Greater Jakarta Indonesia
            </Text>

            <Text
              style={{
                fontFamily:'proximanova-regular',
                fontSize:14,
                color:"#b3b3b3",
                marginBottom:5
              }}
            >
              <Image
                source={suitcase}
                style={{
                  width:14,
                  height:14,
                }}
              />
              &nbsp;Consulting, Research, & Legal Service
            </Text>

            <Text
              style={{
                fontFamily:'proximanova-semibold',
                fontSize:16,
                color:"#4a4a4a",
                marginBottom:5
              }}
            >
            <Label 
              text="Commision"
              style={{textLabel:styles.labelCommision}}
            />
            &nbsp;IDR 10.000.000
            </Text>
            
            {/* Referal 1 Start*/}
            <View
                style={{
                borderWidth:1,
                borderColor:'#b3b3b3',
                marginLeft:20,
                marginRight:10,
                paddingHorizontal:5,
                paddingVertical:5,
                marginVertical:5
              }}
            >
              <Label 
                  style={{textLabel:styles.labelBold}}
              >
                <Image
                  source={userpicture}
                  style={{
                    width:16,
                    height:16,
                  }}
                />
                &nbsp;Irwan Gunawan
                
              </Label>
              <Label
                  text="irwan.gunawan@gmail.com"
                  style={{textLabel:styles.labelEmail}}
              />
              
              <TouchableHighlight
                onPress={() => this._reviewedPress()}
                activeOpacity={ 75  / 100}
                style={styles.button}
                underlayColor={ "rgba(101,209,248,1)" }
                >
                <Text
                    style={{
                    color:'#FFF'
                  }}
                >
                  Reviewed
                </Text>
              </TouchableHighlight>
            </View>
            {/* Referal 1 End */}
            
            {/* Referal 2 Start*/}
            <View
                style={{
                borderWidth:1,
                borderColor:'#b3b3b3',
                marginLeft:20,
                marginRight:10,
                paddingHorizontal:5,
                paddingVertical:5,
                marginVertical:5
              }}
            >
              <Label 
                  style={{textLabel:styles.labelBold}}
              >
                <Image
                  source={userpicture}
                  style={{
                    width:16,
                    height:16,
                  }}
                />
                &nbsp;Gregory Stone
                
              </Label>
              <Label
                  text="gregorystone@gmail.com"
                  style={{textLabel:styles.labelEmail}}
              />
              
              <TouchableHighlight
                onPress={() => this._reviewedPress()}
                activeOpacity={75 / 100}
                style={styles.button}
                underlayColor={"rgba(101,209,248,1)"}
                >
                <Text
                    style={{
                    color:'#FFF'
                  }}
                >
                  Reviewed
                </Text>
              </TouchableHighlight>
            </View>
            {/* Referal 2 End */}
            
          </View>
        </View>
        {/* Content 1 End Here */}
        
        {/* Content 2 Start Here */}
        <View style={styles.content}>
          <View>
            <Text
              style={{
                fontFamily:'proximanova-semibold',
                fontSize:16,
                marginBottom:7
              }}
            >
              Senior UX Architect (Content Planning, Interaction Design)
            </Text>
            
            <Text
              style={{
                fontFamily:'proximanova-regular',
                fontSize:14,
                color:"#b3b3b3",
                marginBottom:5
              }}
            >
              <Image
                source={location}
                style={{
                  width:14,
                  height:14,
                }}
              />
              &nbsp;Greater Jakarta Indonesia
            </Text>

            <Text
              style={{
                fontFamily:'proximanova-regular',
                fontSize:14,
                color:"#b3b3b3",
                marginBottom:5
              }}
            >
              <Image
                source={suitcase}
                style={{
                  width:14,
                  height:14,
                }}
              />
              &nbsp;Consulting, Research, & Legal Service
            </Text>

            <Text
              style={{
                fontFamily:'proximanova-semibold',
                fontSize:16,
                color:"#4a4a4a",
                marginBottom:5
              }}
            >
            <Label 
              text="Commision"
              style={{textLabel:styles.labelCommision}}
            />
            &nbsp;IDR 10.000.000
            </Text>

            {/* Referal 1 Start*/}
            <View
                style={{
                borderWidth:1,
                borderColor:'#b3b3b3',
                marginLeft:20,
                marginRight:10,
                paddingHorizontal:5,
                paddingVertical:5,
                marginVertical:5
              }}
            >
              <Label 
                  style={{textLabel:styles.labelBold}}
              >
                <Image
                  source={userpicture}
                  style={{
                    width:16,
                    height:16,
                  }}
                />
                &nbsp;Cynthia Stevens
                
              </Label>
              <Label
                  text="cynthia.stevens@gmail.com"
                  style={{textLabel:styles.labelEmail}}
              />
              
              <TouchableHighlight
                onPress={() => this._reviewedPress()}
                activeOpacity={ 75  / 100}
                style={styles.button}
                underlayColor={ "rgba(101,209,248,1)" }
                >
                <Text
                    style={{
                    color:'#FFF'
                  }}
                >
                  Reviewed
                </Text>
              </TouchableHighlight>
            </View>
            {/* Referal 1 End */}
            
          </View>
        </View>
        {/* Content 2 End Here */}
        
        {/* Content 3 Start Here */}
        <View style={styles.content}>
          <View>
            <Text
              style={{
                fontFamily:'proximanova-semibold',
                fontSize:16,
                marginBottom:7
              }}
            >
              Senior UX Architect (Content Planning, Interaction Design)
            </Text>
            
            <Text
              style={{
                fontFamily:'proximanova-regular',
                fontSize:14,
                color:"#b3b3b3",
                marginBottom:5
              }}
            >
              <Image
                source={location}
                style={{
                  width:14,
                  height:14,
                }}
              />
              &nbsp;Greater Jakarta Indonesia
            </Text>

            <Text
              style={{
                fontFamily:'proximanova-regular',
                fontSize:14,
                color:"#b3b3b3",
                marginBottom:5
              }}
            >
              <Image
                source={suitcase}
                style={{
                  width:14,
                  height:14,
                }}
              />
              &nbsp;Consulting, Research, & Legal Service
            </Text>

            <Text
              style={{
                fontFamily:'proximanova-semibold',
                fontSize:16,
                color:"#4a4a4a",
                marginBottom:5
              }}
            >
            IDR 30.000.000 - 45.000.000
            </Text>

            <Border />
            
            <Label 
                text="2 Days Ago"
                style={{textLabel:styles.labelDate}}
            />
            
          </View>
        </View>
        {/* Content 3 End Here */}
        
        {/* Content 4 Start Here */}
        <View style={styles.content}>
          <View>
            <Text
              style={{
                fontFamily:'proximanova-semibold',
                fontSize:16,
                marginBottom:7
              }}
            >
              Senior UX Architect (Content Planning, Interaction Design)
            </Text>
            
            <Text
              style={{
                fontFamily:'proximanova-regular',
                fontSize:14,
                color:"#b3b3b3",
                marginBottom:5
              }}
            >
              <Image
                source={location}
                style={{
                  width:14,
                  height:14,
                }}
              />
              &nbsp;Greater Jakarta Indonesia
            </Text>

            <Text
              style={{
                fontFamily:'proximanova-regular',
                fontSize:14,
                color:"#b3b3b3",
                marginBottom:5
              }}
            >
              <Image
                source={suitcase}
                style={{
                  width:14,
                  height:14,
                }}
              />
              &nbsp;Consulting, Research, & Legal Service
            </Text>

            <Text
              style={{
                fontFamily:'proximanova-semibold',
                fontSize:16,
                color:"#4a4a4a",
                marginBottom:5
              }}
            >
            IDR 30.000.000 - 45.000.000
            </Text>

            <Border />
            
            <Label 
                text="2 Days Ago"
                style={{textLabel:styles.labelDate}}
            />
            
          </View>
        </View>
        {/* Content 4 End Here */}
          
        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f3f3f3"
  },
  content: {
    backgroundColor: '#fff',
    paddingVertical:15,
    paddingHorizontal:15,
    marginVertical:5,
    marginHorizontal:5
  },
  button: {
    backgroundColor: '#00FFFF',
    padding: 10
  },
  labelDate:{
    marginTop:10,
    fontSize:12,
    color:'#b3b3b3'
  },
  labelEmail:{
    fontFamily:'proximanova-regular',
    fontSize:14,
    color:"#b3b3b3",
    marginLeft:20,
    marginVertical:5
  },
  labelCommision:{
    fontFamily:'proximanova-regular',
    fontSize:14,
    color:"#b3b3b3",
  },
  labelBold:{
    fontFamily:'proximanova-semibold',
    fontSize:16,
    color:"#4a4a4a"
  },
  labelDayRight:{
    fontFamily:'proximanova-regular',
    fontSize:14,
    color:"#b3b3b3",
  },
  button:{
    backgroundColor: "#16b0dd",
    paddingVertical: 2,
    paddingHorizontal: 5,
    alignItems:"center",
    justifyContent: "center",
    borderRadius:5,
    width:100,
    marginLeft:19,
    marginVertical:5
  }
});

export default FirstPage;