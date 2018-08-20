import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { users } from '../config/data';

class Feed extends Component {
  onLearnMore = (item) => {
    console.log(this.props)
    this.props.navigation.navigate('Details', { ...item });
  };

  render = () => <View>

    {this.props.screenProps.news_state &&
      <ScrollView>
          {this.props.screenProps.news_state.news.map((item, index) => (
            <ListItem
              key={"newsFeed " + index}
              title={item.title}
              onPress={() => this.onLearnMore(item)}
            />
          ))}
      </ScrollView>
    }
  </View>
}

export default Feed;
