import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';


import news from '../reducers/news';
import NewsList from './NewsList';


class App extends Component {

    render() {

        return (

          <View style={styles.container}>
          <Text> pepe</Text>
            <NewsList {...this.props}/>
          </View>


        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});


export default App
