import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signIn">
        <Stack.Screen
          name="signIn"
          component={SignInScreen}
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="signUp"
          component={SignUpScreen}
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ title: "", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
