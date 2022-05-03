
import * as React from 'react';
import { Button, View,Text,Image,style } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from '../components/AppMenu';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import ShirtListContainer from './ShirtListContainer';
import Login from './Login';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ShirtListContainer/>
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Book Details</Text>
    </View>
  );
}
function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1 ,alignItems: 'center'}}>
    </View>
  );
}
function Profile({ navigation }) {
  return (
    <View style={{ flex: 1 ,alignItems: 'center'}}>
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Book Details" component={DetailsScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="LOG OUT" component={Login} />
      </Drawer.Navigator>
  );
}
