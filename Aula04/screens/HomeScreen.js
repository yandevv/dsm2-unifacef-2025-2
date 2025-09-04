import {
  View,
  Text,
  Button,
  StyleSheet
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate("Detalhes")}
      />
      <Button
        title="Ir para Perfil do Usuário"
        onPress={() => navigation.navigate("Perfil do Usuário")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 24, fontWeight: "bold" },
});
