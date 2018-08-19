import React from "react";
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";

import {
  ParallaxSwiper,
  ParallaxSwiperPage
} from "react-native-parallax-swiper";

const { width, height } = Dimensions.get("window");

export default class Carousel extends React.Component {
  myCustomAnimatedValue = new Animated.Value(0);

  getPageTransformStyle = index => ({
    transform: [
      {
        scale: this.myCustomAnimatedValue.interpolate({
          inputRange: [
            (index - 1) * (width + 8), // Add 8 for dividerWidth
            index * (width + 8),
            (index + 1) * (width + 8)
          ],
          outputRange: [0, 1, 0],
          extrapolate: "clamp"
        })
      },
      {
        rotate: this.myCustomAnimatedValue.interpolate({
          inputRange: [
            (index - 1) * (width + 8),
            index * (width + 8),
            (index + 1) * (width + 8)
          ],
          outputRange: ["180deg", "0deg", "-180deg"],
          extrapolate: "clamp"
        })
      }
    ]
  });

  render() {
    return (
      <ParallaxSwiper
        speed={0.5}
        animatedValue={this.myCustomAnimatedValue}
        dividerWidth={8}
        dividerColor="black"
        backgroundColor="black"
        onMomentumScrollEnd={activePageIndex => console.log(activePageIndex)}
        showProgressBar={true}
        progressBarBackgroundColor="rgba(0,0,0,0.25)"
        progressBarValueBackgroundColor="white"
      >
        {this.props.data && this.props.data.map(item =>
          <ParallaxSwiperPage
          BackgroundComponent={
            <Image
              style={styles.backgroundImage}
              source={{ uri: "https://picsum.photos/200/300" }}
            />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <Animated.View
                style={[this.getPageTransformStyle(0)]}
              >
                {this.props.renderItem(item)}
              </Animated.View>
            </View>
          }
        />)
      }

      </ParallaxSwiper>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width,
    height
  },
  foregroundTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  foregroundText: {
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: 0.41,
    color: "white"
  }
});
