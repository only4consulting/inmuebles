import React from "react";
import { View, Text } from "react-native";
import { Form } from "native-base";
import { Constants } from "../../config";
import { UnderlinedInput } from "../inputs";
import { LgButton } from "../buttons";

function LoginForm(props) {
  return (
    <Form>
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

      <LgButton text={Constants.LOGIN} onPress={() => props.onSubmitPress()} />

      <Text
        style={styles.registerText}
        onPress={() => props.onCreateAccountPress()}
      >
        {Constants.CREATE_AN_ACCOUNT}
      </Text>
    </Form>
  );
}

const styles = {
  separator: {
    marginTop: 20
  },
  registerText: {
    fontFamily: "AvenirMedium",
    fontSize: 16,
    color: "#000",
    marginTop: 20,
    textAlign: "center"
  }
};

export default LoginForm;
