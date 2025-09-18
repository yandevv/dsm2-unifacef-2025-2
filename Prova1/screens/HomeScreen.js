import {
  View,
  Text,
  Button,
  StyleSheet
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Yan Victor Brito Gomes</Text>
      <Button
        title="Ver Imagem Internet"
        onPress={() => navigation.navigate("internetImage")}
      />
      <Button
        title="Ver Imagem Local"
        onPress={() => navigation.navigate("localImage")}
      />
      <Button
        title="Ícones Espaçados"
        onPress={() => navigation.navigate("iconSpacing")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  titulo: {
    fontSize: 24,
  },
});
