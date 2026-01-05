import { View, Text, Pressable } from "react-native";

const CategorySelector = ({ 
  selectedCategory, 
  setSelectedCategory,
  isImportant,       
  setIsImportant     
}) => {
  const categories = ["daily", "home", "work", "misc"];

  
const handleCategorySelect = (cat) => {
    if (selectedCategory === cat) {
     
      setSelectedCategory(null);
    } else {
     
      setSelectedCategory(cat);
    }
  };

 
const handleImportantToggle = () => {
   
    setIsImportant(prev => !prev); 

    
  };

  return (
    <View className="flex-row flex-wrap mb-4">
      
      {/* --- Standard Category Buttons --- */}
      <View className="flex-row items-center">
        <Text className="text-md pr-2">Opt 1:</Text>
        {categories.map((cat) => (
          <Pressable
            key={cat}
            onPress={() => handleCategorySelect(cat)}
            className={`px-4 py-1 mr-2 mb-2 rounded-xl border ${
              selectedCategory === cat
                ? "bg-gray-700 border-gray-100"
                : "bg-white border-gray-400"
            }`}
          >
            <Text
              className={`font-bold ${
                selectedCategory === cat ? "text-white" : "text-gray-800"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Text>
          </Pressable>
        ))}

      </View>

      {/* --- Separate Important Toggle Button --- */}
      <View className="flex-row items-center pt-4">
      <Text className="text-md pr-2">Opt 2:</Text>
      <Pressable
        onPress={handleImportantToggle} // Use the new handler
        className={`px-3 py-1 mr-2 mb-2 rounded-xl border ${
          isImportant
            ? "bg-gray-700 border-gray-500" 
            : "bg-white border-gray-400"
        }`}
      >
        
          <Text
            className={`font-bold ${
              isImportant ? "text-white" : "text-black-800 font-bold"
            }`}
          >
            Important
          </Text>
      </Pressable>

      </View>
      
    </View>
  );
};

export default CategorySelector;