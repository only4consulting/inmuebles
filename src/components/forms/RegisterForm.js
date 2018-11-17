import React from "react";
import { View } from "react-native";
import { Form } from "native-base";
import { Constants } from "../../config";
import { UnderlinedInput } from "../inputs";
import { LgButton } from "../buttons";

function RegisterForm(props) {
  return (
    <Form>
      <UnderlinedInput
        label={Constants.FULL_NAME}
        value={props.name}
        onChangeText={text => props.onNameChange(text)}
      />
      <View style={styles.separator} />

      <UnderlinedInput
        keyboardType="numeric"
        label={Constants.MOBILE_NUMBER}
        value={props.mobileNumber}
        onChangeText={text => props.onMobileNumberChange(text)}
      />
      <View style={styles.separator} />

      <UnderlinedInput
        label={Constants.PASSWORD}
        isSecure={true}
        value={props.password}
        onChangeText={text => props.onPasswordChange(text)}
      />
      <View style={styles.separator} />

      <LgButton
        text={Constants.REGISTER}
        onPress={() => props.onSubmitPress()}
      />
    </Form>
  );
}

const styles = {
  separator: {
    marginTop: 20
  }
};

export default RegisterForm;
