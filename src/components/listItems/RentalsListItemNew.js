import React from "react";
import { View, Text, FlatList } from "react-native";
import RentalItem from "./RentalItem";

const RentalsListItem = (props) => {
  return (
    <View>
      <Text style={styles.heading}>{props.heading}</Text>
      <View style={{ marginTop: 10 }}>
        <FlatList
          horizontal={true}
          data={props.rentalItems}
          renderItem={({ item }) => (
            <RentalItem spaced {...item} onPress={() => props.onPress(item.data)} />
          )}
        />
      </View>
      <View style={{ height: 15 }} />
    </View>
  );
}

const styles = {
  heading: {
    fontFamily: "Avenir-Medium",
    fontSize: 16,
    color: "#5F5F5F"
  }
};

export default RentalsListItem;
