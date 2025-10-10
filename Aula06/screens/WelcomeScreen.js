import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen({ route }) {
  const { completeName, email, password, confirmPassword, telephone } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seja bem-vindo ao aplicativo!</Text>
      { completeName && email && password && confirmPassword && telephone ? (
        <View>
          <Text>Nome completo: {completeName}</Text>
          <Text>E-mail: {email}</Text>
          <Text>Senha: {password}</Text>
          <Text>Confirmar senha: {confirmPassword}</Text>
          <Text>Telefone: {telephone}</Text>
        </View>
      ) : null }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
