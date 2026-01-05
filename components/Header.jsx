import { View, Text, Pressable, ImageBackground } from "react-native";
import HeaderMenu from "./HeaderMenu";
import DateTimeDisplay from "./DateTimeDisplay";

const Header = () => {
    return (
        <View className="p-2 flex-row justify-end">
            <HeaderMenu/>
        </View>
    )
}

export default Header;