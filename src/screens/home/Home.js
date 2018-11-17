import React, { Component } from "react";
import { View, Image, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Container } from "native-base";
import { Constants } from "../../config";
import styles from "./styles";

class Home extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ backgroundColor: "#FFF", flex: 1 }}
        forceInset={{ top: "never" }}
      >
        <Container>
          <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/house.png")}
                style={styles.image}
              />
            </View>

            <View style={styles.bottom}>
              <Text style={styles.welcomeText}>{Constants.WELCOME_TO}</Text>
              <Text style={styles.appNameText}>
                {Constants.APP_NAME.toUpperCase()}
              </Text>
              <View style={styles.centered}>
                <Text style={styles.introText}>{Constants.INTRO_TEXT}</Text>
              </View>
              <View style={styles.centered}>
                <Text
                  style={styles.getStartedText}
                  onPress={() => this.props.navigation.navigate("_login")}
                >
                  {Constants.GET_STARTED}
                </Text>
              </View>
            </View>
          </View>
        </Container>
      </SafeAreaView>
    );
  }
}

export default Home;
