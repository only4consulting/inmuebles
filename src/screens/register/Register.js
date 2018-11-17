import React, { Component } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Container } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Constants } from "../../config";
import styles from "./styles";
import { Headers, Misc, Forms } from "../../components";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobileNumber: "",
      password: ""
    };
  }

  register() {
    this.resetState();
    this.props.navigation.navigate("_dashboard");
  }

  resetState() {
    this.setState({
      name: "",
      mobileNumber: "",
      password: ""
    });
  }

  render() {
    return (
      <SafeAreaView
        style={{ backgroundColor: "#FFF", flex: 1 }}
        forceInset={{ top: "never" }}
      >
        <Container>
          <Headers.BackButtonHeader
            title="Register"
            onBackPress={() => this.props.navigation.goBack()}
          />
          <KeyboardAwareScrollView
            enableOnAndroid
            enableAutomaticScroll
            keyboardOpeningTime={0}
          >
            <View style={styles.content}>
              <Misc.AuthTitleSub
                title={Constants.HI_THERE}
                subtitle={Constants.REGISTER_TEXT}
              />

              <View style={{ marginTop: 20 }}>
                <Forms.RegisterForm
                  name={this.state.name}
                  onNameChange={text => this.setState({ name: text })}
                  mobileNumber={this.state.mobileNumber}
                  onMobileNumberChange={text =>
                    this.setState({ mobileNumber: text })
                  }
                  password={this.state.password}
                  onPasswordChange={text => this.setState({ password: text })}
                  onSubmitPress={() => this.register()}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </Container>
      </SafeAreaView>
    );
  }
}

export default Register;
