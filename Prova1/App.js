import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import InternetImageScreen from "./screens/InternetImageScreen";
import LocalImageScreen from "./screens/LocalImageScreen";
import SpacedIconsScreen from "./screens/SpacedIconsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homepage" component={HomeScreen} options={{ title: "Página Inicial" }} />
        <Stack.Screen name="internetImage" component={InternetImageScreen} options={{ title: "Imagem da Internet" }} />
        <Stack.Screen name="localImage" component={LocalImageScreen} options={{ title: "Imagem Local" }} />
        <Stack.Screen name="iconSpacing" component={SpacedIconsScreen} options={{ title: "Ícones Espaçados" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
