import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  let test = false;

  return (
    <Stack.Navigator>
      {test ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
