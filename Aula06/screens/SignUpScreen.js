import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [erroNomeCompleto, setErroNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');

  const handleSignIn = () => {
    if (!nomeCompleto || nomeCompleto.length < 3) {
      setErroNomeCompleto('Digite seu nome completo');
      return;
    }

    if (!email.includes('@')) {
      setErroEmail('Digite um e-mail válido');
      return;
    }

    if (senha.length < 6) {
      setErroSenha('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    if (senha !== confirmarSenha) {
      setErroConfirmarSenha('As senhas não coincidem');
      return;
    }

    if (!telefone || telefone.length < 10) {
      setErroTelefone('Digite um telefone válido');
      return;
    }

    setErroNomeCompleto('');
    setErroEmail('');
    setErroSenha('');
    setErroConfirmarSenha('');
    setErroTelefone('');

    navigation.navigate('welcome', {
      completeName: nomeCompleto,
      email: email,
      password: senha,
      confirmPassword: confirmarSenha,
      telephone: telefone,
    });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Entre com sua conta</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            keyboardType="default"
            autoCapitalize="words"
            value={nomeCompleto}
            onChangeText={setNomeCompleto}
          />
          { erroNomeCompleto ? (
            <Text style={styles.erro}>{erroNomeCompleto}</Text>
          ) : null }
        </View>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        { erroEmail ? (
          <Text style={styles.erro}>{erroEmail}</Text>
        ) : null }
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        { erroSenha ? (
          <Text style={styles.erro}>{erroSenha}</Text>
        ) : null }
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
        { erroConfirmarSenha ? (
          <Text style={styles.erro}>{erroConfirmarSenha}</Text>
        ) : null }
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="numeric"
          value={telefone}
          onChangeText={setTelefone}
        />
        { erroTelefone ? (
          <Text style={styles.erro}>{erroTelefone}</Text>
        ) : null }
        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.button}
        >
          <Text style={styles.buttonLabel}>Cadastrar</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('signIn')}
        style={styles.bottomButton}
      >
        <Text style={styles.bottomButtonLabel}>Já tem uma conta? Faça login!</Text>
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