import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This is the Homescreen</Text>
    </View>
  );
};

export default HomeScreen;
