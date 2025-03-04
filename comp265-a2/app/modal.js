import { Text, View, StyleSheet, Switch, ScrollView, Image } from 'react-native';
import logo from '../assets/blue-full-logo.png';
import { Link } from 'expo-router';

export default function ModalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>Your seat is reserved!</Text>
      <Text style={styles.header2}>Get ready to sweat it out with Sweat Sync!</Text>
      <Link href="/(tabs)/workouts/gym/" style={styles.button}>Back</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff3300',
    margin: 20,
  },
  header2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7BBFFF',
    margin: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  },
  logo: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: '#ff3300',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
