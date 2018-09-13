import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default class HomeScreen extends React.Component {

    state = { height : new Animated.Value(0) };

    onSwipeUp(state) {
      Animated.timing(this.state.height, {
        toValue : 1,
        duration : 300,
        easing : Easing.inOut(Easing.quad),
      }).start();
    }

    onSwipe(direction, state) {
      const { SWIPE_UP } = swipeDirections;

      switch(direction) {
        case SWIPE_UP:
          this.onSwipeUp(state);
          break;
      }

    }

    render() {
        return (

              <GestureRecognizer
                  onSwipeUp={(state) => this.onSwipeUp(state)}
                  onSwipe={(direction, state) => this.onSwipe(direction, state)}
                  config={{
                    velocityThreshold : 0.3,
                    directionalOffsetThreshold: 80
                  }}
                  style={styles.container}>
                <Animated.View style={[styles.CircleShapeView, { height : this.state.height.interpolate({
                  inputRange : [0,1],
                  outputRange : [500, 800]
                }), transform : [{
                  translateY: this.state.height.interpolate({
                    inputRange : [0, 1],
                    outputRange : [0, -300]
                  })
                }] }]}>
                    <Text style={styles.MainText} > Swipe up to start </Text>
                </Animated.View>
              </GestureRecognizer>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems : "center",
      backgroundColor: '#ffcc00',

    },CircleShapeView: {
        marginTop : "100%",
        justifyContent : "center",
        alignItems : "center",
        width : 500,
        borderRadius:500/2,
        backgroundColor: '#fff'
    }, MainText : {
        fontSize : 20,
    },
    logo : {
      flex : 1,
      alignItems : "center",
      justifyContent : "center"
    }
  });
