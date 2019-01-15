import React, { Component } from "react";
import { View, Image, StatusBar } from "react-native";
import styles from "./styles";

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("_dashboard");
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#000" />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/house.png")}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Splash;
