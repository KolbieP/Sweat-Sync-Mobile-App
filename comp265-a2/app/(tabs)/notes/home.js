import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {

  const focused = true;
  const color = '#ff3300';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home screen</Text>
      <View style={styles.iconContainer}><Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} /></View>
      <Text style={styles.text}>Welcome to the home screen!</Text>
      <Text style={styles.text}>Explore the app and enjoy your stay.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff3300',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  iconContainer: {
    padding: 10, 
  },
});
