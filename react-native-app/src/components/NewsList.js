import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export default class NewsList extends Component {
  componentDidMount() {
    console.log("calling listNews 2")
    this.props.listNews();
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
  render() {
    const { news } = this.props;
    console.log("this.props.news[0]", news[0])
    return (
      <FlatList
        styles={styles.container}
        data={news}
        renderItem={this.renderItem}
        keyExtractor={item => item.title + Math.random().toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
