import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Menu = () => {
    let navigation = useNavigation();
    // can we use useNavigation in Class Component ?

    return(
        <View style={{flexDirection:"row"}}>
            <Button onPress={() => navigation.navigate('Login')} title="Login"></Button>
            <Button onPress={() => navigation.navigate('DrawerApp')} title="DrawerApp"></Button>
            <Button onPress={() => navigation.navigate('Home')} title="Home"></Button>
            <Button onPress={() => navigation.navigate('Shirts')} title="Shirts"></Button>
            <Button onPress={() => navigation.navigate('Customer')} title="Customer"></Button>
            <Button onPress={() => navigation.navigate('Student')} title="Student"></Button>
            <Button onPress={() => navigation.navigate('Login')} title="Logout"></Button>
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  opacity: {
    alignItems: "center",
    backgroundColor: "#737373",
    padding: 10
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Menu;
