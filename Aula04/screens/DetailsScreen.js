import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Detalhes</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 24, color: "#007AFF" },
});
