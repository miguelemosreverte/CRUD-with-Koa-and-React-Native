import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import {MyCarousel} from './Carousel';

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
  render = () => {
    console.log("this.props.news[0]", this.props.news[0])
    return <View>
            {this.props.news &&
                  <MyCarousel
                data={this.props.news}
              />
            }
          </View>
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
