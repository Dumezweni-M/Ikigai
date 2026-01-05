import { useEffect, useState, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import Ionicons from "@react-native-vector-icons/ionicons";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Calendar from "../components/Calendar";
import DrawerButton from "../components/DrawerButton";


const Home = () => {

    return (
        
    <PageWrapper>
      <DrawerButton/>

    {/* Middle Scrollable Area */}
    <View className="flex-1 rounded-xl m-1 p-2">

      <Calendar/>
  
    </View>

 
  </PageWrapper>
                
    );
  }
export default Home;