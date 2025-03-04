import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DashboardScreen() {

  const focused = true;
  const color = '#ff3300';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Fitness Dashboard</Text>
      <Text style={styles.text}>Track your progress, stay motivated, and achieve your fitness goals.</Text>
      <View style={styles.iconContainer}><Ionicons name="fitness" color="#ff3300" size={32} /></View>
      <Text style={styles.text}>Current fitness status:</Text>
      <View style={styles.card}>
        <Text style={styles.header2}>Training Status</Text>
        <Text style={styles.header3}>Increasing</Text>
        <Text style={styles.text}>Base Fitness has increased over the past 7 days.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.header2}>Recovery</Text>
        <Text style={styles.header3}>100%</Text>
        <Text style={styles.text}>Full recovery</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.header2}>Sleep</Text>
        <Text style={styles.header3}>8 h 13 m</Text>
        <Text style={styles.text}>Great</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.header2}>Body Mass</Text>
        <Text style={styles.header3}>60.2 kg</Text>
        <Text style={styles.text}>Febuary 13, 2025</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#41474D',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff3300',
    marginBottom: 20,
    marginTop: 20,
  },
  header2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7BBFFF',
    marginBottom: 10,
  },
  header3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff3300',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  iconContainer: {
    backgroundColor: '#41474D',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
