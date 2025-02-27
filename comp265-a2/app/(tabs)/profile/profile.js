import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams } from "expo-router";


export default function ProfileScreen() {

  const { person } = useLocalSearchParams();
  const focused = true;
  const color = '#ff3300';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <View style={styles.iconContainer}><Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} /></View>
      <Text style={styles.text}>Welcome to the Profile screen {person}!</Text>
      <Text style={styles.text}>Person of Interest: {person}</Text>
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
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  iconContainer: {
    padding: 10, 
  },
});
