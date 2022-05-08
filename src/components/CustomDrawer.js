import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Avatar} from "react-native-paper";
import {DrawerContentScrollView,DrawerItemList,} from "@react-navigation/drawer";
import {TouchableOpacity} from "react-native-gesture-handler";

export const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1}}>
          <TouchableOpacity style={styles.profile}> 
            <Avatar.Image source={{uri: "https://vivek.pyther.com/books/jane-profile.jpg"}}/>
            <Text style={styles.name}>Jane Doe</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
        </View>
        <DrawerItemList {...props} />
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
  line:{
    marginLeft: 10,
    marginRight: 30,
    borderBottomWidth: 1,
    borderColor: "gray"
  }
})