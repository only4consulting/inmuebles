import React, { Component } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Container } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Constants } from "../../config";
import styles from "./styles";
import { Headers, Misc, Forms } from "../../components";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      password: ""
    };
  }

  login() {
    this.resetState();
    this.props.navigation.navigate("_dashboard");
  }

  navigateToRegister() {
    this.resetState();
    this.props.navigation.navigate("_register");
  }

  resetState() {
    this.setState({
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
            title="Login"
            onBackPress={() => this.props.navigation.goBack()}
          />
          <KeyboardAwareScrollView
            enableOnAndroid
            enableAutomaticScroll
            keyboardOpeningTime={0}
          >
            <View style={styles.content}>
              <Misc.AuthTitleSub
                title={Constants.WELCOME}
                subtitle={Constants.SIGN_IN_TEXT}
              />

              <View style={{ marginTop: 20 }}>
                <Forms.LoginForm
                  mobileNumber={this.state.mobileNumber}
                  onMobileNumberChange={text =>
                    this.setState({ mobileNumber: text })
                  }
                  password={this.state.password}
                  onPasswordChange={text => this.setState({ password: text })}
                  onCreateAccountPress={() => this.navigateToRegister()}
                  onSubmitPress={() => this.login()}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </Container>
      </SafeAreaView>
    );
  }
}

export default Login;
