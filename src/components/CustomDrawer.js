import React from "react";
import {View, Text, StyleSheet,onPress} from "react-native";
import {Avatar} from "react-native-paper";
import {DrawerContentScrollView,DrawerItem,DrawerItemList} from "@react-navigation/drawer";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useNavigation } from '@react-navigation/core';
import {removeUser} from '../service/UserService'

export const CustomDrawer = (props) => {
  let navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} >
        <View style={{flex: 1}}>
          <TouchableOpacity style={styles.profile} onPress={()=> navigation.navigate('Profile')}> 
            <Avatar.Image source={{uri: "https://vivek.pyther.com/books/jane-profile.jpg"}}/>
            <Text style={styles.name}>Jane Doe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.edit} onPress={()=> navigation.navigate('Profile')}> 
          <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="LOG OUT"
          onPress={() => {
            navigation.navigate('GetStarted');
              removeUser();
            }}/>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({ 
  profile: {
    flex: 1,
    margin: 20, 
    flexDirection: 'row',
  },
  name: {
    flex: 2,
    fontSize: 20,
    margin: 15,
    color: "#4e6882",
    fontFamily: 'Montserrat_700Bold'
  },
  edit: {
    backgroundColor: '#d9d9d9',
    width: 100,
    borderRadius: 100,
    padding: 10,
    marginLeft: 30,
    marginBottom: 10,
  },
  editText: {
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
  },
  line:{
    marginLeft: 10,
    marginRight: 30,
    borderBottomWidth: 1,
    borderColor: "gray"
  }
})
