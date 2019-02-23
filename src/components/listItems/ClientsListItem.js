import React from "react";
import {
  View,
  TouchableHighlight,
  Text,
  Image,
  StyleSheet,
  Platform,
  Linking,
  LinkingIOS
} from "react-native";

const ClientsListItem = (props) => {

  const getURL = (web) => {
    if (Platform.OS === 'android') {
      console.log("WWW", web)
      return (
        <Text style={{ color: 'blue' }}
          onPress={() => Linking.openURL(web)}>
          Sitio web
        </Text>
      );
    } else {
      return (
        <Text style={{ color: 'blue' }}
          onPress={() => LinkingIOS.openURL(web)}>
          Sitio web
        </Text>
      )
    }
  }

  return (
    <TouchableHighlight
      style={
        props.spaced
          ? { ...styles.container, ...styles.containerSpacing }
          : styles.container
      }
      // onPress={() => props.onPress()}
      onPress={() => alert("Listar propiedades")}
      underlayColor="#EFF1F5"
    >
      <View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: props.logo }} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.price}>{props.nombre}</Text>
          <Text style={styles.title}>
            {props.movil}
          </Text>
          <Text style={styles.title}>
            {props.direccion} - {props.ciudad}
          </Text>
          <Text style={styles.title}>
            {props.horario}
          </Text>
          {getURL(props.web)}
        </View>
      </View>
    </TouchableHighlight >
  );
}

const IMAGE_HEIGHT = 150;
const CONTAINER_WIDTH = 170;

const styles = {
  container: {
    width: CONTAINER_WIDTH,
    borderColor: "#F7F7F7",
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 10
  },
  containerSpacing: {
    marginRight: 15,
    marginTop: 5
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  textContainer: {
    padding: 8
  },
  image: {
    height: IMAGE_HEIGHT,
    width: CONTAINER_WIDTH
  },
  price: {
    fontFamily: "Lato-Black",
    fontSize: 20,
    color: "#000"
  },
  title: {
    fontFamily: "Avenir-Medium",
    fontSize: 13,
    color: "#5F5F5F",
    marginTop: 5
  }
};

export default ClientsListItem;
