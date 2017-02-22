import React, {Component} from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import NavBar from 'react-native-navbar';

import SecondPage from './secondPage';
import LoginPage from './loginPage';

class FirstPage extends Component {
  static route(props) {
    return {
      id: 'FirstPage',
      component: FirstPage
    };
  }

  render() {
    const titleConfig = {
      title: 'Qolega - Job List',
    };

    const leftButtonConfig = {
      title: 'Previous',
      handler: () => this.props.navigator.pop(),
    }

    return (
      <View style={styles.container}>
        <NavBar 
          title={titleConfig}
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

        <View style={styles.content}>
          <View>
            <Text
              style={{
                fontFamily:'proximanova-semibold',
                fontSize:16
              }}
            >
              Senior UX Architect (Content Planning, Interaction Design)
            </Text>
            <Text
              style={{
                fontFamily:'proximanova-regular',
                fontSize:14
              }}
            >
              Greater Jakarta Indonesia
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFF"
  },
  content: {
    backgroundColor: '#f3f3f3',
    height:197,
    paddingVertical:15,
    paddingHorizontal:15,
    marginVertical:5,
    marginHorizontal:5
  },
  button: {
    backgroundColor: '#00FFFF',
    padding: 10
  }
});

export default FirstPage;