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
    console.log("this.props", this.props)
    console.log("this.props.news_state.news[0]", this.props.news_state.news[0])
    return <View>
            {this.props.news_state.news &&
                  <MyCarousel
                data={this.props.news_state.news}
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
