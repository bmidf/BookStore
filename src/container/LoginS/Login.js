
import React, { Component } from "react";
import { AppRegistry,KeyboardAvoidingView,TouchableOpacity,AsyncStorage,Image,TextInput,StyleSheet,Text,View } from "react-native";
import {setUser} from '../../service/UserService'

export default class Login extends Component {
  constructor(props) {
    super(props);
}
  state = {
    email: 'admin',
    password: 'admin'
}
 
onLoginButton = () => {
    if (this.state.email == this.state.password) {
      let loginUser =  {email:this.state.email};
      setUser(loginUser);
      this.props.navigation.navigate('DrawerApp', { name: this.state.email });
      this.setState({
          email: '',
          password: ''
      });
    } else {
        Alert.alert('Username/Password should be admin/admin.');
    }
}
  render() {
    return (
      <View style={styles.container}>
          <View style={ styles.row}>
        <TouchableOpacity style={styles.buttonsContainer}>
          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate("Login")}
            title="Sign up" >SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonssContainer}>
          <Text
            style={styles.loginaText}
            onPress={() => this.props.navigation.navigate("Register")}
            title="Sign up" >SIGN UP</Text>
        </TouchableOpacity>
        </View>
        <View behavior="padding" style={styles.container}>
          <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput
                placeholder="Email"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                underlineColorAndroid={"grey"}
                style={styles.input}
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View style={styles.window}>
              <TextInput
                placeholder="Password"
                returnKeyType="go"
                underlineColorAndroid={"grey"}
                secureTextEntry
                style={styles.input}
                ref={input => (this.passwordInput = input)}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.onLoginButton()}>
              <Text style={styles.logiinText}>LOGIN</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[styles.buttonaContainer, styles.loginsButton]} 
              onPress={() => this.props.navigation.navigate("ForgotPassword")}>
            <Text
              style={styles.loginsText}
              title="Forget Password">FORGOT PASSWORD</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white"
    },
    row:{
      flexDirection: 'row',
      marginTop: 80,
    },
    input: {
        height: 40,
        paddingHorizontal: 10
      },
    buttonContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
        borderRadius: 30,
    },
    buttonsContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 40,
        marginLeft: 80,
        width: 100,
        borderRadius: 30,
        backgroundColor: "#6200EE"
    },
    buttonssContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 40,
        marginLeft: 20,
        width: 100,
        borderRadius: 30,
    },
    buttonaContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 30,
    },

    subtext: {
        color: "black",
        width: 160,
    },
    keyboard: {
        margin: 10,
    },
    window: {
        marginBottom: 15
    },

    loginButton: {
        backgroundColor: "#6200EE",
    },
    loginsButton:{
        color: "white",
    },
    loginText: {
        fontSize: 12,
        color: 'white',
    },
    logiinText: {
      fontSize: 16,
      color: 'white',
      fontFamily: 'Montserrat_700Bold'
  },
    loginaText: {
        fontSize: 12,
        color: "#9599B3",
        fontFamily: 'Montserrat_400Regular'
    },
    loginnText: {
        fontSize: 12,
        color: "white",
        fontFamily: 'Montserrat_400Regular'
    },
    loginsText: {
        fontSize: 16,
        color: "#6200EE",
        fontFamily: 'Montserrat_700Bold'
    }
});

AppRegistry.registerComponent("Login", () => Login);
