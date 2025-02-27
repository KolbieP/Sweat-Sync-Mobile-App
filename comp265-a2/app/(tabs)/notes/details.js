import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DetailsScreen() {

  const focused = true;
  const color = '#ff3300';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details screen</Text>
      <View style={styles.iconContainer}><Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} /></View>
      <Text style={styles.text}>Here are the details you need to know.</Text>
      <Text style={styles.text}>Feel free to explore more information.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
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


