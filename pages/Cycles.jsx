import { useEffect, useState, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import Ionicons from "@react-native-vector-icons/ionicons";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Tabs from "../components/Tabs";


const Home = () => {

    return (
        
    <PageWrapper>
    <Header />

    {/* Middle Scrollable Area */}
    <View className="flex-1">

    {/* Toggle header */}
    <Pressable
      onPress={() => setShowList(prev => !prev)}
      className="border-b border-gray-400 px-4 pt-2 pb-2 mb-4 w-[100%] flex-row items-center"
    >
      <Ionicons name="repeat-outline" size={30} color="black" />
      <Text className="ml-2 text-2xl text-gray-500 font-bold">
        Daily                                                       
      </Text>
    </Pressable>
    

   
    </View>

    <Tabs />
  </PageWrapper>
                
    );
  }
export default Home;