import React, { Component } from 'react';
import { Root, Tabs } from './config/router';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  componentDidMount = () =>
    this.props.newsCRUD({
      method: "GET"
    })

  render = () => <View style={styles.container}>
                  <Root screenProps={this.props}/>
                </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 25
  }
});

export default App;
