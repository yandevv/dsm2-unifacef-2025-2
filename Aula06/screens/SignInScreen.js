import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignInScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const handleSignIn = () => {
    if (!email.includes('@')) {
      setErroEmail('Digite um e-mail válido');
      return;
    }

    if (senha.length < 6) {
      setErroSenha('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    setErroEmail('');
    setErroSenha('');

    navigation.navigate('welcome', {
      email: null,
      password: null,
      completeName: null,
      confirmPassword: null,
      telephone: null,
    });
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Entre com sua conta</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        {erroEmail ? (
          <Text style={styles.erro}>{erroEmail}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        {erroSenha ? (
          <Text style={styles.erro}>{erroSenha}</Text>
        ) : null}
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonLabel}>Entrar</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('signUp')}
        style={styles.bottomButton}
      >
        <Text style={styles.bottomButtonLabel}>Não tem uma conta? Se cadastre!</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    bottom: 40,
  },
  bottomButtonLabel: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});