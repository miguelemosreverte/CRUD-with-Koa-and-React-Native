import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import REACT_APP_API_URL from './src/actions/api_url'
import Carousel from './src/components/Carousel';


export default class App extends React.Component {

  state = {}
  componentDidMount = () => {

    fetch('http://192.168.0.105:5000/news/')
              .then(notJson => notJson.json())
             .then(response => this.setState({news: response},()=>console.log(response[0])))
             .catch(error => console.error(error))

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Shake your phone to open the test5 menu.</Text>

        {this.state.news &&
          <Carousel
        data={this.state.news}
        renderItem={item =>
          {
            console.log(item)
            return <View >
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.content}</Text>
              <Text>{item.link}</Text>
            </View>
          }}
          keyExtractor={item => item.title + Math.random().toString() + item.link}
      />}
      {/*this.state.news && this.state.news.map(item => (
        <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.content}</Text>
      <Text>{item.link}</Text>
      </View>
    ))*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
