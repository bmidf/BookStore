import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/container/Login';
import ShirtApp from './src/container/ShirtListContainer';
import Menu from './src/components/AppMenu';
import DrawerApp from './src/container/DrawerNavigation';
import ForgetPassword from './src/container/ForgetPassword';
import Register from './src/container/Register';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View>
      <Menu/>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" options={{
              headerShown: false,
      }}component={Login} />
      <Stack.Screen name="DrawerApp" options={{
              headerShown: false,
      }}component={DrawerApp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default App;