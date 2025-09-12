import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/avatar.png")} style={styles.avatar} />
      <Text style={styles.nome}>João Silva</Text>
      <Ionicons name="settings" size={30} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10
  }
});
