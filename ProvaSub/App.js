import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DailyAppointmentsScreen from './screens/DailyAppointmentsScreen';
import WeeklyAppointmentsScreen from './screens/WeeklyAppointmentsScreen';

const Stack = createNativeStackNavigator();

//! Adicionei as opções de título para cada tela para não ficar com os nomes dos componentes em inglês na barra de navegação.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: 'Início' }} name="home" component={HomeScreen} />
        <Stack.Screen options={{ title: 'Compromissos do dia' }} name="dailyAppointments" component={DailyAppointmentsScreen} />
        <Stack.Screen options={{ title: 'Compromissos da semana' }} name="weeklyAppointments" component={WeeklyAppointmentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
