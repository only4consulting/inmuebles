import React from "react";
import { View } from "react-native";
import { Item, Input, Label } from "native-base";

function UnderlinedInput(props) {
  return (
    <View>
      <Item floatingLabel style={styles.item}>
        <Label style={styles.label}>{props.label}</Label>
        <Input
          style={styles.input}
          keyboardType={props.keyboardType || "default"}
          maxLength={props.maxLength}
          secureTextEntry={props.isSecure}
          disabled={props.disabled}
          returnKeyType={props.returnKeyType || "next"}
          value={props.value}
          onChangeText={text => props.onChangeText(text)}
        />
      </Item>
    </View>
  );
}

const styles = {
  item: {
    marginLeft: 0
  },
  label: {
    fontFamily: "AvenirMedium",
    fontSize: 16,
    color: "#5C6979",
    paddingTop: 4
  },
  input: {
    fontFamily: "AvenirMedium",
    fontSize: 17,
    color: "#000"
  }
};

export default UnderlinedInput;
