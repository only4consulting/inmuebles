import React from "react";
import { View } from "react-native";
import { Form } from "native-base";
import { Constants } from "../../config";
import { UnderlinedInput } from "../inputs";
import { SmButton, ProfileSwitch } from "../buttons";

function ProfileForm(props) {
  return (
    <Form>
      <UnderlinedInput
        disabled={props.busy}
        label={Constants.FULL_NAME}
        value={props.name}
        onChangeText={text => props.onNameChange(text)}
      />
      <View style={styles.separator} />

      <UnderlinedInput
        disabled={props.busy}
        keyboardType="numeric"
        label={Constants.MOBILE_NUMBER}
        value={props.mobileNumber}
        onChangeText={text => props.onMobileNumberChange(text)}
      />
      <View style={styles.separator} />

      <ProfileSwitch
        text={Constants.SHARE_CONTACT_DETAILS}
        disabled={props.busy}
        value={props.contactShare}
        onValueChange={value => props.onContactShareChange(value)}
      />
      <View style={styles.separator} />

      <ProfileSwitch
        text={Constants.ENABLE_LOCATION}
        disabled={props.busy}
        value={props.locationEnabled}
        onValueChange={value => props.onLocationEnabledChange(value)}
      />
      <View style={styles.separator} />

      <View style={styles.submitButtonContainer}>
        <SmButton
          busy={props.busy}
          text={Constants.SAVE}
          onPress={() => props.onSubmitPress()}
        />
      </View>
    </Form>
  );
}

const styles = {
  separator: {
    marginTop: 20
  },
  submitButtonContainer: {
    alignSelf: "center",
    marginBottom: 20
  }
};

export default ProfileForm;
