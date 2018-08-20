import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class Detail extends Component {
  render() {
    const { title, description, content, link } = this.props.navigation.state.params;

    return (
      <ScrollView>


          <ListItem
            title="Description"
            rightTitle={description}
            hideChevron
          />
          <ListItem
            title="Content"
            rightTitle={content}
            hideChevron
          />

          <ListItem
            title="Link"
            rightTitle={link}
            hideChevron
          />
      </ScrollView>
    );
  }
}

export default Detail;
