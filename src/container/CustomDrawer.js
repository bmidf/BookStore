import React from "react";
import { View, Text, onPress } from "react-native";
import { Avatar, Caption, TouchableRipple } from "react-native-paper";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export  const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{flex: 1,margin: 20, flexDirection: 'row',}}> 
            <Avatar.Image source={{uri: "https://vivek.pyther.com/books/jane-profile.jpg"}}/>
            <Text style={{flex: 2, fontSize: 20, margin: 15, fontWeight: 'bold'}}> Jane Doe</Text>
          </TouchableOpacity>
          <View style={{
              marginLeft: 10,
              marginRight: 30,
              borderBottomWidth: 1,
              borderColor: "gray",
            }}>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};