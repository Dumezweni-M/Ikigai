import { View, Text, Pressable } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";




const Navi = () => {

    const navigation = useNavigation();
    return (

        <View className="px-2 py-2 flex-row justify-evenly bg-gray-100 shadow-lg rounded-xl">
            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('OnBoarding')}>
                <Ionicons name="person-outline" color="black" size={20}/>
            </Pressable>
            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('OnBoarding2')}>
                <Ionicons name="person" color="black" size={20}/>
            </Pressable>
            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home-outline" color="black" size={20}/>
            </Pressable>
            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('Home')}>
                <Ionicons name="notifications-outline" color="black" size={20}/>
            </Pressable>
            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('Home')}>
                <Ionicons name="settings-outline" color="black" size={20}/>
            </Pressable>
            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('HabitManager')}>
                <Ionicons name="medal-outline" color="black" size={20}/>
            </Pressable>
        </View>
    )
}

export default Navi;