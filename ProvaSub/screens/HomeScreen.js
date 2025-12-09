import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.homePageTitle}>Agenda</Text>
      <View>
        <Text style={styles.homePageInfo}>Yan Victor Brito Gomes</Text>
        <Text style={styles.homePageInfo}>6o Semestre - Engenharia de Software</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.homePageButton}
          onPress={() => { navigation.navigate('dailyAppointments') }}
        >
          <Text style={styles.homePageButtonText}>COMPROMISSOS DO DIA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homePageButton}
          onPress={() => { navigation.navigate('weeklyAppointments') }}
        >
          <Text style={styles.homePageButtonText}>COMPROMISSOS DA SEMANA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  homePageInfo: {
    textAlign: 'center',
  },
  homePageTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  homePageButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    width: 'auto'
  },
  homePageButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
