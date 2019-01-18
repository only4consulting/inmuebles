import React, { Component } from "react";
import { Container, Tabs, TabHeading, Tab } from "native-base";
import { SafeAreaView } from "react-navigation";
import { connect } from 'react-redux';
import { setActiveTab } from '../../actions/dashboardActions';
import styles from "./styles";
import { TabItems } from "../../components";
import HouseList from "../house/HouseListNew";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  onExploreTabItemPress(index) {
    this.props.doSetActiveTab(index, this.props.exploreTabLabels[index]);
  }

  onTabChange(index) {
    this.setState({
      currentPage: index + 1
    });
  }

  onHouseListItemPress(data) {
    console.log("LLegó data de propiedad", data);
    this.props.navigation.navigate("_houseDetail", { data });
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
                rentalsListings={this.props.rentalsListings}
                onItemPress={(data) => this.onHouseListItemPress(data)} />
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
  rentalsListings: state.dashboard.rentalsListings,
  filterCategories: state.filter.filterCategories,
  loading: state.dashboard.loading
});

const mapDispatchToProps = dispatch => ({
  doSetActiveTab: (indx, tab) => dispatch(setActiveTab(indx, tab))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);