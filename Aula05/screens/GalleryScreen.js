import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  View
} from "react-native";

export default function GalleryScreen() {
  return (
    <View style={styles.mainContainer}>
      <Ionicons
        name="camera"
        size={48}
        color="#3A77E0"
        style={styles.icon}
      />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVfHORQFLyUf_rNove-xUmxIskDeMJ63REz_YIMQ6S0vCyQdkBvJos4igKspvCgpqnpy8h0xM--1uckzZIxDgyoHy37-MowkF-YzvVx8' }}
          style={{ width: 200, height: 200 }}
        />
        <Image
          source={{ uri: 'https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg' }}
          style={{ width: 200, height: 200 }}
        />
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VUUhoA3vQbxTqdXUTBR59Xb_lImDsrb9aYMgPv5_oG-40gbRodeFlLx6UTeMB0VG45E4kyu4yN2Z0jFN_ywrCE0HvCZzp7erIiJ_OA' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  imageContainer: {
    marginTop: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  icon: {
    position: 'absolute',
    top: 8,
  }
});