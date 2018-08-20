import React, {Component} from "react";
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Dimensions, Text, View } from 'react-native';

export class MyCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
                <Text>{item.description}</Text>
                <Text>{item.content}</Text>
                <Text>{item.link}</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.props.data}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={sliderWidth}
            />
        );
    }
}
const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  slide: {
  },
  title: {backgroundColor: "blue"
  }
});
