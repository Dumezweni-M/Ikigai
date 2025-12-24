import { useEffect, useState, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import Ionicons from "@react-native-vector-icons/ionicons";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Calendar from "../components/Calendar";


const Home = () => {

    return (
        
    <PageWrapper>
    <Header />

    {/* Middle Scrollable Area */}
    <View className="flex-1 border-2 rounded-xl m-1 p-2">

      <Calendar/>
  
    </View>

    <Tabs />
  </PageWrapper>
                
    );
  }
export default Home;