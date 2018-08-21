import React, { Component } from 'react';
import { ScrollView, View, StyleSheet,TextInput as Text} from 'react-native';
import { Card, ListItem} from 'react-native-elements';

import Authorized from '../HOC/Authorized'
import EditButton from '../Button'

class Detail extends Component {

  state = { editing: false}

  getImageUrl () {
    return 'https://loremflickr.com/320/240/newspaper?date=' + Math.random();
  }

  render() {
    const data_source = this.props.navigation? this.props.navigation.state.params : this.props
    const auth = this.props.screenProps ? this.props.screenProps.login_state.auth : true
    const token = this.props.screenProps && this.props.screenProps.login_state.auth?
    this.props.screenProps.login_state.auth.token : this.props.token
    const { title, description, content, link, _id, newsCRUD } = data_source
    return (

      <ScrollView>


          <Card
            image={this.props.hideImage? undefined : {uri: this.getImageUrl()}}
          >
              <Authorized auth={auth}>
              <EditButton
              iconName={this.state.editing?  "send-o" : "edit"}
              onPress={() => {
                            if(this.state.editing){
                              newsCRUD({
                                method: this.props.METHOD || "PUT",
                                url: _id || "",
                                headers: {'Authorization': "bearer " + token},
                                data:{...this.state, id: _id}
                              })
                              newsCRUD({
                                method: "GET"
                              })
                              if (this.props.informSuccess) this.props.informSuccess()
                            }
                            this.setState({editing: !this.state.editing})
                      }}
              />
              </Authorized>

              <Text editable={false}>'Title'</Text>
              <Text editable={this.state.editing}
              multiline={true}
              onChangeText={title => this.setState({title})}
              value={this.state.title || title}
              ></Text>

              <Text editable={false}>'Description'</Text>
              <Text editable={this.state.editing}
              multiline={true}
              onChangeText={description => this.setState({description})}
              value={this.state.description || description}
              ></Text>


              <Text editable={false}>'Content'</Text>
              <Text editable={this.state.editing}
              multiline={true}
              onChangeText={content => this.setState({content})}
              value={this.state.content || content}
              ></Text>

              <Text editable={false}>'Link'</Text>
              <Text editable={this.state.editing}
              multiline={true}
              onChangeText={link => this.setState({link})}
              value={this.state.link || link}
              ></Text>

            </Card>
    </ScrollView>
    );
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

export default Detail;
