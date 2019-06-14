import React, { Component } from "react";
import { Animated } from "react-native";

export default class ScaleInView extends Component {
  animation = new Animated.Value(0);
  componentDidMount() {
    Animated.spring(this.animation, {
      toValue: 1
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          transform: [{ scale: this.animation }]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
