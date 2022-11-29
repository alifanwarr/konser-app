
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import TabBawah from "./pages/BottomTab";
import Details from "./pages/Details";
import DetailTempat from "./pages/DetailTempat";
import ProfileScreen from './pages/ProfileScreen';
import Lagu from './pages/Lagu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="HOME" component={TabBawah}/>
        <Stack.Screen name="DETAIL" component={Details}/>
        <Stack.Screen name="DETAIL TEMPAT" component={DetailTempat}/>
        <Stack.Screen name="LAGU" component={Lagu}/>
        <Stack.Screen name="About App" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};