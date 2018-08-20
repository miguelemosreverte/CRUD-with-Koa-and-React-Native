import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Login extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>

        <Button
          title="Login"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={this.props.email}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Password"
            rightTitle={this.props.login.username}
            hideChevron
          />
        </List>

      </ScrollView>
    );
  }
}

Login.defaultProps = { ...me };

export default Login;
