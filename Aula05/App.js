import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePageScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import ProfileScreen from './screens/ProfileScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomePageScreen} options={{ title: 'Início', headerShown: false }} />
        <RootStack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Galeria' }} />
        <RootStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
