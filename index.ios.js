/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Navigator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FirstPage from './components/page/firstPage';
import LoginPage from './components/page/loginPage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class qolega2 extends Component {

  renderScene = (route, navigator) => {
    return React.createElement(route.component, {navigator: navigator});
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={FirstPage.route()}
          renderScene={this.renderScene}
          style={styles.navigator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigator: {
    flex: 1,
    height: windowHeight,
    width: windowWidth
  }
});

AppRegistry.registerComponent('qolega2', () => qolega2);
