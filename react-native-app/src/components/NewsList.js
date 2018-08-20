import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listNews } from '../reducers/news';

class NewsList extends Component {
  componentDidMount() {
    this.props.listNews();
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
  render() {
    const { news } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={news}
        renderItem={this.renderItem}
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

const mapStateToProps = state => {
  let storedRepositories = state.news.map(repo => ({ key: repo.id, ...repo }));
  return {
    news: storedRepositories
  };
};

const mapDispatchToProps = {
  listNews
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
