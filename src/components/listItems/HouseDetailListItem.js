import React from "react";
import { View, Text } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

function HouseDetailListItem(props) {
  return (
    <View style={styles.container}>
      <Feather name={props.icon} style={styles.icon} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    marginTop: 20
  },
  title: {
    fontFamily: "Avenir-Medium",
    fontSize: 15,
    color: "#000"
  },
  subtitle: {
    fontFamily: "Avenir-Medium",
    fontSize: 13,
    color: "#5F5F5F",
    marginTop: 5
  },
  icon: {
    color: "#5F5F5F",
    fontSize: 25,
    alignSelf: "center"
  }
};

export default HouseDetailListItem;
