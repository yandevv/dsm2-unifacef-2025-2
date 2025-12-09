import { useCallback } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { FlatList } from 'react-native-web';

import compromissos from '../data/compDia';

const DailyAppointmentsScreen = () => {
  const renderAppointment = useCallback(({ item }) => {
    return (
      <Text style={styles.appointment}>{item.descr}</Text>
    );
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>11/11 (ter)</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Yan Victor Brito Gomes</Text>
        <Text style={styles.info}>6o Semestre - Engenharia de Software</Text>
      </View>
      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointment}
      />
    </View>
  );
}

export default DailyAppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 12,
  },
  info: {
    textAlign: 'center',
  },
  appointment: {
    marginBottom: 32,
  }
});
