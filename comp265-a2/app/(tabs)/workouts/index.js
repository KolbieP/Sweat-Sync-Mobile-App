import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function WorkoutsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Workout screen</Text>
      <Link href="/workouts/workout/" style={styles.button}>
        Go to Log Workouts Screen
      </Link>
      <Link href="/workouts/gym/" style={styles.button}>
        Go to Gym Workouts Screen
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

