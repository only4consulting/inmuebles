import React from "react";
import { View } from "react-native";
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { Tabs, Lists } from "../../components";

const renderBody = (props) => {
  if (props.loading) {
    return (
      <Spinner size="large" color="black" />
    )
  }
  return (
    <Lists.RentalsList
      rentals={props.rentalsListings}
      onItemPress={() => props.onItemPress()}
    />
  );
}

const HouseList = (props) => {
  return (
    <View style={styles.container}>
      <Tabs.ExploreTab
        labels={props.tabLabels}
        active={props.activeTabItem}
        onItemPress={index => props.onTabItemPress(index)}
      />
      <View style={styles.content}>
        {renderBody(props)}
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

const mapStateToProps = state => ({
  loading: state.dashboard.loading
});

export default connect(mapStateToProps, null)(HouseList);
