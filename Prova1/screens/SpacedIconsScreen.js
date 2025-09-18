import {
  View,
  StyleSheet,
} from "react-native";

import { Feather } from "@expo/vector-icons";

export default function SpacedIconsScreen() {
  return (
    <View style={styles.container}>
      <Feather name="home" size={64} color="#231c80" />
      <Feather name="camera" size={64} color="#fcba03" />
      <Feather name="settings" size={64} color="#801678" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
