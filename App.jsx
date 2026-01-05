import 'react-native-gesture-handler'; // Required for Drawer to work!
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; 
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import Cycles from "./pages/Overview";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// 1. Create a separate component for your Stack
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Overview" component={Cycles} />
      {/* Add more Stack screens here later */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <StatusBar hidden={true} />
      
      <NavigationContainer>
        {/* 2. The Drawer is the parent. It renders the Stack as one of its screens. */}
        <Drawer.Navigator 
          initialRouteName="Home"
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
            name="Home" 
            component={StackNavigator} 
            options={{ title: 'Menu' }} 
          />
          <Drawer.Screen 
            name="Settings" 
            component={StackNavigator} 
            options={{ title: 'Settings' }} 
          />
          {/* You can add more Drawer items here */}
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}