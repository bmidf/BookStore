import * as React from 'react';
//import {View,Button,onPress,style} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AntDesign,MaterialCommunityIcons,Feather} from '@expo/vector-icons';
// import { Provider } from "react-redux";
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import OrderScreen from './Screens/OrderScreen';
import BookScreen from './Screens/BookScreen';
import Login from './LoginS/Login';
import {CustomDrawer} from '../components/CustomDrawer';
// import {store} from '../service/store';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
  //<Provider store={store}>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
        <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#6200EE',},
          headerTintColor: 'white',
          drawerActiveTintColor:"#6200EE",
          drawerActiveBackgroundColor: "white",
          overlayColor: "#6200EE",
          drawerIcon: () => (<AntDesign name="home" size={24} color="grey" />),
          headerRight: () =>(<AntDesign name="search1" size={24} color="white" />)
        }}/>
        <Drawer.Screen
          name="Book Details"
          component={BookScreen}
          options={{headerStyle: {backgroundColor: '#6200EE'},
            headerTintColor: 'white',
            drawerActiveTintColor:"#6200EE",
            drawerActiveBackgroundColor: "white",
            overlayColor: "#6200EE",
            drawerIcon: () => (<MaterialCommunityIcons name="text-box-check-outline" size={24} color="grey"/>),
            headerRight: () =>(<AntDesign name="search1" size={24} color="white"/>)
          }}/>
        <Drawer.Screen
          name="Cart"
          component={CartScreen}
          options={{headerStyle: {backgroundColor: '#6200EE'},
            headerTintColor: 'white',
            drawerActiveTintColor:"#6200EE",
            drawerActiveBackgroundColor: "white",
            overlayColor: "#6200EE",
            drawerIcon: () => (<AntDesign name="shoppingcart" size={24} color="grey"/>),
            headerRight: () =>(<AntDesign name="search1" size={24} color="white"/>)
          }}/>
        <Drawer.Screen
          name="Orders"
          component={OrderScreen}
          options={{headerStyle: {backgroundColor: '#6200EE'},
            headerTintColor: 'white',
            drawerActiveTintColor:"#6200EE",
            drawerActiveBackgroundColor: "white",
            overlayColor: "#6200EE",
            drawerIcon: () => (<Feather name="shopping-bag" size={24} color="grey"/>),
            headerRight: () =>(<AntDesign name="search1" size={24} color="white" />)
          }}/>
        <Drawer.Screen 
          name="LOG OUT"
          component={Login}
        />
      </Drawer.Navigator>
  //</Provider>
  );
}