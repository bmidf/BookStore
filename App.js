import * as React from 'react';
import {View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/container/LoginS/Login';
import DrawerApp from './src/container/DrawerNavigation';
import ForgetPassword from './src/container/LoginS/ForgetPassword';
import Register from './src/container/LoginS/Register';
import GetStarted from './src/components/GetStarted';
import OrderPlaced from './src/components/OrderPlaced';
import Profile from './src/components/Profile';
import {useFonts,Montserrat_700Bold,Montserrat_500Medium,Montserrat_400Regular} from '@expo-google-fonts/montserrat';

const Stack = createStackNavigator();
function App() {
        let [fontsLoaded] = useFonts({Montserrat_700Bold,Montserrat_500Medium,Montserrat_400Regular});
        if (!fontsLoaded) {return <View></View>;}
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
                        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
                        <Stack.Screen name="Register" component={Register} />
                        <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
        </NavigationContainer>
);}
export default App;
