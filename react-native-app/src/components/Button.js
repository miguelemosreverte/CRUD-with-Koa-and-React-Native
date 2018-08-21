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


export default class MyButton extends Component {
  render = () => (
      <Button
       icon={
         <Icon
           name={this.props.iconName || 'trash'}
           size={15}
           color='white'
           style={styles.button}

         />
       }
       title=""
       onPress={()=> this.props.onPress()}
     />)

}

const styles = StyleSheet.create({
  button: {
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
