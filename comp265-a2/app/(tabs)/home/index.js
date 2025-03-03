import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Sweat Sync</Text>
      <Text style={styles.text}>Your journey to a healthier you starts here.</Text>
      
      <Text style={styles.text}>Fitness Tip: Warm up before your workout to prevent injuries.</Text>
      <Link href="/home/dashboard/" style={styles.button}>
        Dashboard
      </Link>
      <Link href="/home/details/" style={styles.button}>
        Details
      </Link>
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
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#7BBFFF',
    marginBottom: 20, 
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

