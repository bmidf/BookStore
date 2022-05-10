import React, { useEffect }  from 'react';
import {View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {useNavigation } from '@react-navigation/core';
import {loadUser} from '../service/UserService';

function GetStarted() {
  let navigation = useNavigation();
  const onLoadUser = async ()=>{
    let user = await loadUser();
    console.log("userDetails:",user);
    if(user.email){
     navigation.navigate('DrawerApp')
    }
  }
  useEffect(()=>{
     onLoadUser();
  })
  return (
    <View>
      <Image style={styles.stretch} source={require('./BookStore.jpg')}/>
      <Text style={styles.startText}>Welcome</Text>
      <Text style={styles.starttText}>to Book Store</Text>
      <Text style={styles.startttText}>Let's get started!</Text>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {navigation.navigate("Login")}}>
          <Text style={styles.loginText} onPress={() =>{navigation.navigate("Login")}} title="Sign in">SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsContainer} onPress={() => {navigation.navigate("Register")}}>
          <Text style={styles.loginaText} title="Sign up">SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  stretch: {
    alignSelf: 'center',
  },
  startText: {
    fontFamily: 'Montserrat_700Bold',
    fontSize:30,
    marginTop: 50,
    textAlign: 'center',
    color: "#6200EE"
  },
  starttText: {
    fontFamily: 'Montserrat_700Bold',
    fontSize:30,
    textAlign: 'center',
    color: "#6200EE"
  },
  startttText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize:20,
    textAlign: 'center',
    color: "#6200EE"
  },
  container2:{
    marginTop: 60
  },
  buttonContainer:{
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#9599B3"
  },
  buttonsContainer:{
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#6200EE"
  },
  loginText:{
    color: "white"
  },
  loginaText:{
    color: "white"
  }
});

export default GetStarted;
