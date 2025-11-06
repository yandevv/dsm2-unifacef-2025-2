import { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [imagem, setImagem] = useState(null);

  async function abrirCamera() {
    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  async function abrirGaleria() {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      {imagem ? (
        <Image
          source={{ uri: imagem }}
          style={styles.avatar}
        />
      ) : (
        <Image
          source={require('./assets/avatar.png')}
          style={styles.avatar}
        />
      )}

      <Button title="Tirar Foto" onPress={abrirCamera} />
      <Button title="Escolher da Galeria" onPress={abrirGaleria} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  }
});
