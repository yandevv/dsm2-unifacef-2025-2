import {
  View,
  Button,
  StyleSheet,
  Image
} from "react-native";

export default function InternetImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://m.media-amazon.com/images/I/811y6CGbHYL._UF1000,1000_QL80_.jpg" }}
        style={{ width: 128, height: 128 }}
      />
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
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
    backgroundColor: "#9c3030",
  },
});
