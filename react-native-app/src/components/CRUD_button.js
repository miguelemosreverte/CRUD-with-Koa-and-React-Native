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


export default class CRUD_button extends Component {
  render = () => (
      <Button
       key={"newsFeedTrashButton " + this.props.index}
       icon={
         <Icon
           name={this.props.iconName || 'trash'}
           size={15}
           color='white'
           style={styles.trashButton}

         />
       }
       title=""
       onPress={()=>{
         this.props.newsCRUD({
           method: this.props.METHOD || "DELETE",
           url: item._id,
           headers: {'Authorization': "bearer " + auth.token}
         })
         this.props.newsCRUD({
           method: "GET"
         })
         //TODO I want to use Redux.thunk to be able to pipe one dispatch into the next.
     }}
     />)

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
