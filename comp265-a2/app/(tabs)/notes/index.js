import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notes screen</Text>
      <Link href="/notes/home/" style={styles.button}>
        Go to Home Screen
      </Link>
      <Link href="/notes/details/" style={styles.button}>
        Go to Details Screen
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
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#fff',
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#ff3300',
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

