import { useCallback } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { SectionList } from 'react-native-web';

import compromissos from '../data/compSemana';

const WeeklyAppointmentsScreen = () => {
  const renderAppointment = useCallback(({ item }) => {
    return (
      <Text style={styles.appointment}>{item.descr}</Text>
    );
  }, []);

  const renderAppointmentHeader = useCallback(({ section }) => {
    return (
      <Text style={styles.sectionHeader}>{section.titulo}</Text>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Yan Victor Brito Gomes</Text>
        <Text style={styles.info}>6o Semestre - Engenharia de Software</Text>
      </View>
      <SectionList
        sections={compromissos}
        keyExtractor={(item, index) => item + index}
        renderItem={renderAppointment}
        renderSectionHeader={renderAppointmentHeader}
      />
    </View>
  );
}

export default WeeklyAppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  infoContainer: {
    marginBottom: 12,
  },
  sectionHeader: {
    fontSize: 18,
    marginVertical: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'center',
  },
  appointment: {
    marginBottom: 16,
  }
});
