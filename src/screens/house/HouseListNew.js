import React from "react";
import { View } from "react-native";
import { Tabs, Lists } from "../../components";

const HouseList = (props) => {
  return (
    <View style={styles.container}>
      <Tabs.ExploreTab
        labels={props.tabLabels}
        active={props.activeTabItem}
        onItemPress={index => props.onTabItemPress(index)}
      />
      <View style={styles.content}>
        <Lists.RentalsList
          rentals={props.rentalsListings}
          onItemPress={() => props.onItemPress()}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF"
  }
};

export default HouseList;
