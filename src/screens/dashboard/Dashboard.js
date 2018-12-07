import React, { Component } from "react";
import { Container, Tabs, TabHeading, Tab } from "native-base";
import { SafeAreaView } from "react-navigation";
import { connect } from 'react-redux';
import { setActiveTab } from '../../actions/dashboardActions';
import styles from "./styles";
import { Constants } from "../../config";
import { Modals, TabItems } from "../../components";
import HouseList from "../house/HouseList";
import Profile from "../profile/Profile";
import NotificationsPermission from "../notifications/NotificationsPermission";
import Notifications from "../notifications/Notifications";
import Filter from "../filter/Filter";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      // activeExploreTabItem: Constants.EXPLORE_TAB_LABELS[0],
      houseListSearchText: "",
      profileFormBusy: false,
      profileName: Constants.PROFILE_NAME,
      profileMobileNumber: Constants.PROFILE_MOBILE_NUMBER,
      profileContactShare: false,
      profileLocationEnabled: false,
      notificationsEnabled: false,
      filterCategories: Constants.FILTER_CATEGORIES,
      activeFilterCategories: [],
      filterMinPrice: 500,
      filterMaxPrice: 11000,
      filterStartPrice: 3500,
      filterStopPrice: 7500,
      filterFormBusy: false,
      enableLocationModalVisible: false,
      enableContactShareModalVisible: false,
      rentalsListings: Constants.RENTAL_LISTINGS
    };
  }

  onExploreTabItemPress(index) {
    this.props.doSetActiveTab(Constants.EXPLORE_TAB_LABELS[index]);
    // this.setState({
    //   activeExploreTabItem: Constants.EXPLORE_TAB_LABELS[index]
    // });
  }

  onFilterItemPress(categoryIndex, itemIndex) {
    let item = this.state.filterCategories[categoryIndex].filters[itemIndex];
    if (this.state.activeFilterCategories.includes(item)) {
      const before = this.state.activeFilterCategories.slice(
        0,
        this.state.activeFilterCategories.indexOf(item)
      );
      const after = this.state.activeFilterCategories.slice(
        this.state.activeFilterCategories.indexOf(item) + 1
      );
      this.setState({
        activeFilterCategories: [...before, ...after]
      });
    } else {
      this.setState({
        activeFilterCategories: [...this.state.activeFilterCategories, item]
      });
    }
  }

  onFilterPriceRangeChange(values) {
    this.setState({
      filterStartPrice: values[0],
      filterStopPrice: values[1]
    });
  }

  onFilterSubmitPress() {
    this.setState({ filterFormBusy: true });
    setTimeout(() => {
      this.setState({ filterFormBusy: false });
      this.props.navigation.navigate("_filterResult");
    }, 3000);
  }

  updateProfileNameField(name) {
    this.setState({ profileName: name });
  }

  updateProfileMobileNumberField(mobileNumber) {
    this.setState({ profileMobileNumber: mobileNumber });
  }

  updateProfileContactSharing(value) {
    if (value) {
      this.setState({ enableContactShareModalVisible: value });
    } else {
      this.setState({ profileContactShare: value });
    }
  }

  updateProfileLocationToggle(value) {
    if (value) {
      this.setState({ enableLocationModalVisible: value });
    } else {
      this.setState({ profileLocationEnabled: value });
    }
  }

  allowNotifications() {
    this.setState({ notificationsEnabled: true });
  }

  enableLocationServices() {
    this.setState({
      profileLocationEnabled: true,
      enableLocationModalVisible: false
    });
  }

  enableContactSharing() {
    this.setState({
      profileContactShare: true,
      enableContactShareModalVisible: false
    });
  }

  onChangeSearchText(text) {
    this.setState({
      houseListSearchText: text
    });
  }

  onTabChange(index) {
    this.setState({
      currentPage: index + 1,
      houseListSearchText: ""
    });
  }

  onHouseListItemPress() {
    this.setState({
      houseListSearchText: ""
    });
    this.props.navigation.navigate("_houseDetail");
  }

  save() {
    this.setState({ profileFormBusy: true });
    setTimeout(() => {
      this.setState({ profileFormBusy: false });
    }, 5000);
  }

  render() {
    console.log("Ruso:", this.props.activeExploreTabItem);
    return (
      <SafeAreaView
        style={{ backgroundColor: "#FFF", flex: 1 }}
        forceInset={{ top: "never" }}
      >
        <Container>
          <Tabs
            page={this.state.currentPage - 1}
            locked={true}
            tabBarPosition="bottom"
            tabBarUnderlineStyle={styles.tabBarUnderline}
            onChangeTab={({ i }) => this.onTabChange(i)}
          >
            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <TabItems.BottomMenuItem
                    active={this.state.currentPage === 1}
                    icon="home"
                  />
                </TabHeading>
              }
            >
              <HouseList
                tabLabels={Constants.EXPLORE_TAB_LABELS}
                activeTabItem={this.props.activeExploreTabItem}
                onTabItemPress={index => this.onExploreTabItemPress(index)}
                rentalsListings={this.state.rentalsListings}
                onItemPress={() => this.onHouseListItemPress()}
                searchText={this.state.houseListSearchText}
                onChangeSearchText={text => this.onChangeSearchText(text)}
              />
            </Tab>

            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <TabItems.BottomMenuItem
                    active={this.state.currentPage === 2}
                    icon="sliders"
                  />
                </TabHeading>
              }
            >
              <Filter
                busy={this.state.filterFormBusy}
                categories={this.state.filterCategories}
                active={this.state.activeFilterCategories}
                onItemPress={(categoryIndex, itemIndex) =>
                  this.onFilterItemPress(categoryIndex, itemIndex)
                }
                minPrice={this.state.filterMinPrice}
                maxPrice={this.state.filterMaxPrice}
                startPrice={this.state.filterStartPrice}
                stopPrice={this.state.filterStopPrice}
                onPriceRangeChange={values =>
                  this.onFilterPriceRangeChange(values)
                }
                onSubmitPress={() => this.onFilterSubmitPress()}
                onBackButtonPress={() => this.setState({ currentPage: 1 })}
              />
            </Tab>

            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <TabItems.BottomMenuItem
                    active={this.state.currentPage === 3}
                    icon="bell"
                  />
                </TabHeading>
              }
            >
              {!this.state.notificationsEnabled && (
                <NotificationsPermission
                  onAllowPress={() => this.allowNotifications()}
                />
              )}

              {this.state.notificationsEnabled && (
                <Notifications
                  onBackButtonPress={() => {
                    this.setState({ notificationsEnabled: false });
                  }}
                />
              )}
            </Tab>

            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <TabItems.BottomMenuItem
                    active={this.state.currentPage === 4}
                    icon="user"
                  />
                </TabHeading>
              }
            >
              <Profile
                formBusy={this.state.profileFormBusy}
                name={this.state.profileName}
                onNameChangeText={text => this.updateProfileNameField(text)}
                mobileNumber={this.state.profileMobileNumber}
                onMobileNumberChange={text =>
                  this.updateProfileMobileNumberField(text)
                }
                contactShare={this.state.profileContactShare}
                onContactShareChange={value =>
                  this.updateProfileContactSharing(value)
                }
                locationEnabled={this.state.profileLocationEnabled}
                onLocationEnabledChange={value =>
                  this.updateProfileLocationToggle(value)
                }
                onFormSubmitPress={() => this.save()}
                onLogoutPress={() => this.props.navigation.navigate("_home")}
              />
            </Tab>
          </Tabs>

          {this.state.enableLocationModalVisible === true && (
            <Modals.LocationPermissionModal
              onCloseIconPress={() =>
                this.setState({ enableLocationModalVisible: false })
              }
              onAllowPress={() => this.enableLocationServices()}
            />
          )}

          {this.state.enableContactShareModalVisible === true && (
            <Modals.ContactPermissionModal
              onCloseIconPress={() =>
                this.setState({ enableContactShareModalVisible: false })
              }
              onAllowPress={() => this.enableContactSharing()}
            />
          )}
        </Container>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  activeExploreTabItem: state.dashboard.activeExploreTabItem
});

const mapDispatchToProps = dispatch => ({
  doSetActiveTab: (index) => dispatch(setActiveTab(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);