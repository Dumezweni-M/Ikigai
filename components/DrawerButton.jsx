import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import { Menu } from 'lucide-react-native';

const DrawerButton = () => {
  const navigation = useNavigation();

  return (
    
    <TouchableOpacity
        className="p-2 border"
        onPress={() => navigation.openDrawer()}>
      <Menu color="black" size={24} />
    </TouchableOpacity>
  );
};

export default DrawerButton;