import * as React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from "react-redux";
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import Login from './LoginS/Login';
import AddCart from './AddCart';
import {CustomDrawer } from './CustomDrawer';
import {store} from '../service/store';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerActiveTintColor:"#6200EE",
          drawerActiveBackgroundColor: "white",
          overlayColor: "#6200EE",
          drawerIcon: () => (
            <AntDesign name="home" size={24} color="grey" />
          ),
        }}
        />
        <Drawer.Screen
          name="Book Details"
          component={AddCart}
          options={{
            drawerActiveTintColor:"#6200EE",
            drawerActiveBackgroundColor: "white",
            overlayColor: "#6200EE",
            drawerIcon: () => (
              <MaterialCommunityIcons name="text-box-check-outline" size={24} color="grey"/>
          ),
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CartScreen}
          options={{
            drawerActiveTintColor:"#6200EE",
            drawerActiveBackgroundColor: "white",
            overlayColor: "#6200EE",
            drawerIcon: () => (
              <AntDesign name="shoppingcart" size={24} color="grey" />
            ),
          }}
        />
        <Drawer.Screen
          name="LOG OUT"
          component={Login}
        />
    </Drawer.Navigator>
    </Provider>
  );
}