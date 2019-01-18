import React from "react";
import { List } from "native-base";
import { RefreshControl } from 'react-native';
import { connect } from 'react-redux'
import { RentalsListItem } from "../listItems";
import { setRentalItems } from '../../actions/dashboardActions';

const RentalsList = (props) => {
  return (
    <List
      refreshControl={<RefreshControl refreshing={props.loading} onRefresh={() => props.doSetRentalItems(props.activeExploreTabItemIndex)} />}
      dataArray={(props.rentals[props.activeExploreTabItemIndex] !== undefined) ? props.rentals[props.activeExploreTabItemIndex] : []}
      renderRow={rental => (
        <RentalsListItem {...rental} onPress={(data) => props.onItemPress(data)} />
      )}
    />
  );
}

const mapStateToProps = state => ({
  activeExploreTabItemIndex: state.dashboard.activeExploreTabItemIndex,
  loading: state.dashboard.loading
});

const mapDispatchToProps = dispatch => ({
  doSetRentalItems: (indx) => dispatch(setRentalItems(indx))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalsList);
