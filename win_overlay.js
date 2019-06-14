import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const getMessage = value => {
  if (value === "X_WIN") {
    return "X WINS!";
  } else if (value === "O_WIN") {
    return "O WINS!";
  } else if (value === "DRAW") {
    return "It's a Draw";
  }
};

export default class WinOverlay extends Component {
  render() {
    return (
      <View style={styles.cover}>
        <Text style={styles.message}>{getMessage(this.props.value)}</Text>
        <View>
          <TouchableOpacity onPress={this.props.onRestart} style={styles.button}>
            <Text style={styles.buttonText}>Restart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cover: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,.5)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  message: {
    fontSize: 80,
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  button: {
    borderRadius: 8,
    backgroundColor: "tomato",
    paddingHorizontal: 30,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 40
  }
});
