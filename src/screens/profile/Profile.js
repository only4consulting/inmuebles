import React from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Headers, Forms } from "../../components";

function Profile(props) {
  return (
    <View style={styles.container}>
      <Headers.ProfileHeader
        avatar={require("../../assets/images/avatar.png")}
      />
      <View style={{ backgroundColor: "#F7F7F7", padding: 10 }}>
        <Text style={styles.logoutText} onPress={() => props.onLogoutPress()}>
          Sign Out
        </Text>
      </View>
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        keyboardOpeningTime={0}
      >
        <View style={styles.content}>
          <Forms.ProfileForm
            busy={props.formBusy}
            name={props.name}
            onNameChange={text => props.onNameChangeText(text)}
            mobileNumber={props.mobileNumber}
            onMobileNumberChange={text => props.onMobileNumberChange(text)}
            contactShare={props.contactShare}
            onContactShareChange={value => props.onContactShareChange(value)}
            locationEnabled={props.locationEnabled}
            onLocationEnabledChange={value =>
              props.onLocationEnabledChange(value)
            }
            onSubmitPress={() => props.onFormSubmitPress()}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = {
  container: {
    flex: 1
  },
  content: {
    padding: 16
  },
  logoutText: {
    fontFamily: "LatoRegular",
    fontSize: 17,
    color: "#000",
    textAlign: "center"
  }
};

export default Profile;
