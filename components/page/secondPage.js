import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavBar from 'react-native-navbar';

class SecondPage extends Component {
  static route(props) {
    return {
      id: 'SecondPage',
      component: SecondPage
    };
  }

  render() {
    const titleConfig = {
      title: 'Second Component',
    };

    const leftButtonConfig = {
      title: 'Previous',
      handler: () => this.props.navigator.pop(),
    }

    return (
      <View style={styles.container}>
        <NavBar title={titleConfig} leftButton={leftButtonConfig} />
        <View style={styles.content}>
          <Text>This is the second views</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecondPage;