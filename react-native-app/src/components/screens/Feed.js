import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { ListItem } from 'react-native-elements';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Feed extends Component {
  onLearnMore = (item) => this.props.navigation.navigate('Details', { ...item })

  render = () => <View>

    { this.props.screenProps.news_state &&
      this.props.screenProps.news_state.news &&
      this.props.screenProps.news_state.news.map &&
      <ScrollView>
          {this.props.screenProps.news_state.news.map((item, index) => (
            <View style={styles.row}
              key={"newsFeedView " + index}>
            <Button
              key={"newsFeedTrashButton " + index}
              icon={
                <Icon
                  name='trash'
                  size={15}
                  color='white'
                  style={styles.trashButton}

                />
              }
              title=""
              onPress={()=>{
                console.log("DELETING " + item._id)
                this.props.screenProps.newsCRUD({
                method: "DELETE",
                url: item._id
                })
                this.props.screenProps.newsCRUD({
                method: "GET"
                })
            }}
            />
            <Text
              style={styles.text}
              key={"newsFeed " + index}
              onPress={() => this.onLearnMore(item)}
            >{item.title}</Text>
            </View>
          ))}
      </ScrollView>
    }
  </View>
}

const styles = StyleSheet.create({
  trashButton: {
    padding: 2,
    margin: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 2,
    margin: 5,
  },
  text: {
    marginLeft: 5,
  },
});

export default Feed;
