import { View, Text, Pressable } from 'react-native'
import Ionicons from "@react-native-vector-icons/ionicons";

const AddModal = () => {
    return (
        <View className="border border-gray-100 p-2 flex items-center">

            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('Home')}>
                <Ionicons name="add-outline" color="black" size={30}/>
            </Pressable>
            <Text>Challenge</Text>
        </View>
    )
}
export default AddModal;