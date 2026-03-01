import 'react-native-gesture-handler'; // Required for Drawer to work!
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; 
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import Home from "./pages/Home";
import OnBoarding from './pages/OnBoarding';
import OnBoarding2 from './pages/OnBoarding2';
import HabitManager from './pages/HabitManager';
import { useEffect } from 'react';
import { getDB } from './db';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Onboarding" component={OnBoarding} />
      <Stack.Screen name="Onboarding2" component={OnBoarding2} />
      <Stack.Screen name="HabitManager" component={HabitManager} />
      {/* Add more Stack screens here later */}
    </Stack.Navigator>
  );
}



export default function App() {
useEffect(() => {
    // Define an async function inside useEffect
    const initialize = async () => {
      try {
        const db = await getDB();
        console.log("Database initialized successfully");
      } catch (error) {
        console.error("Error initializing database:", error);
      }
    };

    initialize();
  }, []);

  return (
    <PaperProvider>
      <StatusBar hidden={true} />
      
      <NavigationContainer>
        {/* 2. The Drawer is the parent. It renders the Stack as one of its screens. */}
        <Drawer.Navigator
          id="DrawerNav"
          initialRouteName="HomeStack"
          screenOptions={{
            headerShown: false,
            drawerStyle: {
            backgroundColor: '#fff', 
            width: 200,
            elevation: 0,          // Removes shadow on Android
            shadowOpacity: 0,      // Removes shadow on iOS
            borderRightWidth: 1,   // Optional: adds a flat hairline border instead
            borderRightColor: '#eee',
          },            
          }}
          >
          <Drawer.Screen 
            name="OnboardingStack" 
            component={StackNavigator}
            options={{ title: 'OnBoarding' }} 
          />
          <Drawer.Screen 
            name="Onboarding2Stack" 
            component={StackNavigator}
            options={{ title: 'OnBoarding2' }} 
          />
          <Drawer.Screen 
            name="HabitManagerStack" 
            component={StackNavigator}
            options={{ title: 'HabitManager' }} 
          />
          <Drawer.Screen 
            name="HomeStack" 
            component={StackNavigator}
            options={{ title: 'Menu' }} 
          />
          <Drawer.Screen 
            name="SettingsStack" 
            component={StackNavigator}
            options={{ title: 'Settings' }} 
          />
          {/* You can add more Drawer items here */}
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
