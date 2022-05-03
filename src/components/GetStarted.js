
import React from 'react';
import { View, Image, StyleSheet,Text,TouchableOpacity } from 'react-native';

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.stretch} source={require('./BookStore.jpg')}/>
      <Text style={styles.startText }>Welcome</Text>
      <Text style={styles.startText}>to Book Store</Text>
      <Text style={styles.starttText}>Let's get started!</Text>
      <View style={ {flexDirection: "column"}}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            style={styles.loginText}
            onPress={() =>{}}
            title="Sign ip"  >SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsContainer}>
          <Text
            style={styles.loginaText}
            onPress={() => {}}
            title="Sign up" >SIGN UP</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

  },
  stretch: {
    alignSelf: 'center'
    
  },
  startText: {
    fontWeight: 'bold',
    fontSize:20,
    marginTop: 5,
    textAlign: 'center',
    color: "#6200EE"
  },
  starttText: {

    fontWeight: 'bold',
    fontSize:10,
    marginTop: 20,
    textAlign: 'center',
    color: "#6200EE"
  },
  
  buttonContainer:{
    marginTop: 33,
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