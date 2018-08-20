import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class Detail extends Component {
  render() {
    const { title, description, text, link } = this.props.navigation.state.params;

    return (
      <ScrollView>


        <List>
          <ListItem
            title="Description"
            rightTitle={description}
            hideChevron
          />
          <ListItem
            title="Text"
            rightTitle={text}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Link"
            rightTitle={link}
            hideChevron
          />
        </List>

      </ScrollView>
    );
  }
}

export default Detail;
