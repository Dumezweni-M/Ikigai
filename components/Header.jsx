import { View, Text, Pressable, ImageBackground } from "react-native";
import HeaderMenu from "./HeaderMenu";
import DateTimeDisplay from "./DateTimeDisplay";

const Header = () => {
    return (
        <View className="p-2 flex-row justify-between border border-gray-800 ">
            <DateTimeDisplay/>
            <HeaderMenu/>
        </View>
    )
}

export default Header;