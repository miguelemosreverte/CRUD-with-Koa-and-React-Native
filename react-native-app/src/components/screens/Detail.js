import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, List, ListItem } from 'react-native-elements';

class Detail extends Component {
  getImageUrl () {
    return 'https://loremflickr.com/320/240/newspaper?date=' + Math.random();
  }

  render() {
    const { title, description, content, link } = this.props.navigation.state.params;

    return (

      <ScrollView>
      <Card
        image={{uri: this.getImageUrl()}}
      >


          <ListItem
            title="Description"
            hideChevron
          />
          <Text>{description}</Text>


          <ListItem
            title="Content"
            hideChevron
          />
          <Text>{content}</Text>

          <ListItem
            title="Link"
            hideChevron
          />
          <Text>{link}</Text>

        </Card>
    </ScrollView>
    );
  }
}

export default Detail;
