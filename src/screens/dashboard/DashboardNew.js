import React, { Component } from "react";
import { Container, Tabs, TabHeading, Tab } from "native-base";
import { SafeAreaView } from "react-navigation";
import { connect } from 'react-redux';
import { setActiveTab } from '../../actions/dashboardActions';
import styles from "./styles";
import { Constants } from "../../config";
import { TabItems } from "../../components";
import HouseList from "../house/HouseListNew";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      activeFilterCategories: [],
      rentalsListings: Constants.RENTAL_LISTINGS
    };
  }

  onExploreTabItemPress(index) {
    console.log("indx", index);
    this.props.doSetActiveTab(this.props.exploreTabLabels[index]);
  }

  onTabChange(index) {
    this.setState({
      currentPage: index + 1
    });
  }

  onHouseListItemPress() {
    this.props.navigation.navigate("_houseDetail");
  }

  render() {

    return (
      <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }} forceInset={{ top: "never" }} >
        <Container>
          <Tabs
            page={this.state.currentPage - 1}
            locked={true}
            tabBarPosition="bottom"
            tabBarUnderlineStyle={styles.tabBarUnderline}
            onChangeTab={({ i }) => this.onTabChange(i)} >

            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <TabItems.BottomMenuItem
                    active={this.state.currentPage === 1}
                    icon="home"
                  />
                </TabHeading>} >

              <HouseList
                tabLabels={this.props.exploreTabLabels}
                activeTabItem={this.props.activeExploreTabItem}
                onTabItemPress={index => this.onExploreTabItemPress(index)}
                rentalsListings={this.state.rentalsListings}
                onItemPress={() => this.onHouseListItemPress()}
                searchText={this.state.houseListSearchText}
                onChangeSearchText={text => this.onChangeSearchText(text)} />

            </Tab>

          </Tabs>

        </Container>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  activeExploreTabItem: state.dashboard.activeExploreTabItem,
  exploreTabLabels: state.dashboard.exploreTabLabels,
  filterCategories: state.filter.filterCategories
});

const mapDispatchToProps = dispatch => ({
  doSetActiveTab: (index) => dispatch(setActiveTab(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);