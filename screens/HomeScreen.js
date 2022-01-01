import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <View>
      <Text>{`Hi, ${user}!`}</Text>
    </View>
  );
};

export default HomeScreen;
