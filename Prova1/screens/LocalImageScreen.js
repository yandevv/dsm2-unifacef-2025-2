import {
  View,
  Button,
  StyleSheet,
  Image
} from "react-native";

export default function LocalImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/hornet.png")}
        style={{ width: 256, height: 256 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
