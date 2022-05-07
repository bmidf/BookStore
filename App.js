import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/container/LoginS/Login';
import DrawerApp from './src/container/DrawerNavigation';
import ForgetPassword from './src/container/LoginS/ForgetPassword';
import Register from './src/container/LoginS/Register';
import GetStarted from './src/components/GetStarted';
import OrderPlaced from './src/components/OrderPlaced';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="GetStarted" options={{
                        headerShown: false,
                }}component={GetStarted} />
                <Stack.Screen name="Login" options={{
                        headerShown: false,
                }}component={Login} />
                <Stack.Screen name="DrawerApp" options={{
                        headerShown: false,
                }}component={DrawerApp} />
                <Stack.Screen name="OrderPlaced" options={{
                        headerShown: false,
                }} component={OrderPlaced} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;