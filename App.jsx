import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import Cycles from "./pages/Overview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
       
        <NavigationContainer>
          <StatusBar hidden={true} />
          <Stack.Navigator initialRouteName="Cycles" screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Cycles" component={Cycles}/>
            
          </Stack.Navigator>
        </NavigationContainer>   
  );
}


