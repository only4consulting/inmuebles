import React from "react";
import { View, Text } from 'react-native';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { Tabs, Lists } from "../../components";

const renderBody = (props) => {
  if (props.loading) {
    return (
      <Spinner size="large" color="black" />
    )
  }
  const tabIndx = props.tabLabels.indexOf(props.activeTabItem);

  console.log("ppp", props.rentalsListings);

  //Si es la tab 3 es la de las inmobiliarias
  if (tabIndx === 3) {
    return (
      <Lists.ClientsList 
        clients={props.rentalsListings[3]}/>
    );
  } else {
    return (
      <Lists.RentalsList
        rentals={props.rentalsListings}
        onItemPress={(data) => props.onItemPress(data)}
      />
    );
  }
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
