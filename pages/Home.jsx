import { useEffect, useState, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

import PageWrapper from "../components/PageWrapper";

import DrawerButton from "../components/DrawerButton";
import Navi from "../components/Navi";

import PowerWheel from "../components/PowerWheel";


const Home = () => {

    return (
        
    <PageWrapper>
      <DrawerButton/>

    {/* Middle Scrollable Area */}
    <View className="flex-1 rounded-xl m-1 p-2">
      <Navi/>
      <PowerWheel/>

      <View className="border rounded-lg mt-4 p-2 space-y-2">
        <Text className="text-xl">-Passion(Love)-Read for 20 mins [CHECKBOX]</Text>
        <Text className="text-xl">-Skill (Good At)Practice Spanish[CHECK]</Text>
        <Text className="text-xl">-Mission (World)Text friend check in[CHECK]</Text>
        <Text className="text-xl">-Profession (Paid)Clear inbox[CHECK]</Text>
      </View>
      {/* <Calendar/> */}
      {/* <AddModal/> */}
      {/* <RadarGrid/> */}
      
      {/* <FullCalendar/> */}
  
    </View>

 
  </PageWrapper>
                
    );
  }
export default Home;