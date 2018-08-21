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
import Authorized from '../HOC/Authorized'
import CustomButton from '../Button'
import Detail from './Detail'

class Feed extends Component {

  state = { editing: false}

  onLearnMore = (item) => this.props.navigation.navigate('Details', { ...item, newsCRUD : this.props.screenProps.newsCRUD })
  render = () => {
    const news_state = this.props.screenProps.news_state
    const auth = this.props.screenProps.login_state.auth
    const token = auth ? auth.token : undefined
    return <View>


    {!this.state.editing &&
    <Authorized auth={auth}>
    <CustomButton
    key={"CreateButton"}
    iconName={this.state.editing?  "send-o" : "plus"}
    onPress={() => this.setState({editing: !this.state.editing})}
    />
    </Authorized>}

    {this.state.editing &&
    <Detail
    hideImage
    informSuccess={()=>this.setState({editing:false})}
    METHOD="POST"
    newsCRUD={this.props.screenProps.newsCRUD}
    token={token}
    />}

    { news_state &&
      news_state.news &&
      news_state.news.map &&
      <ScrollView>
          {news_state.news.map((item, index) => (
            <View style={styles.row}
              key={"newsFeedView " + index}>

              <Authorized auth={auth}>
              <CustomButton
              key={"DeleteButton" + index}
              onPress={() => {
                          this.props.screenProps.newsCRUD({
                            method: this.props.METHOD || "DELETE",
                            url: item._id,
                            headers: {'Authorization': "bearer " + token}
                          })
                          this.props.screenProps.newsCRUD({
                            method: "GET"
                          })
                      }}
              />
              </Authorized>


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
