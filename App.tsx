import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CitySelectorScreen from "./screens/CitySelectorScreen";
import CityDetailScreen from "./screens/CityDetailScreen";

const Stack: any = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="citySelector" component={CitySelectorScreen} />
          <Stack.Screen name="cityDetail" component={CityDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
// const styles = StyleSheet.create({
// });
