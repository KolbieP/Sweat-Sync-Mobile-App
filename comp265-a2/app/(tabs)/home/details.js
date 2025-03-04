import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DetailsScreen() {

  const color = '#ff3300';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Workout Summary</Text>
      <Text style={styles.text}>Here's a detailed overview of your recent workout sessions.</Text>
      <View style={styles.iconContainer}><Ionicons name="body" color={color} size={32} /></View>
      <View style={styles.card}>
        <Text style={styles.header2}>Exercises Performed</Text>
        <Text style={styles.text}>Full Body Workout</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.header2}>Duration and Intensity</Text>
        <Text style={styles.text}>Total workout time: 45 minutes. Average intensity: Moderate.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.header2}>Notes and Feedback</Text>
        <Text style={styles.text}>Felt strong today, but need to work on form for squats.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.header2}>Upcoming Workouts</Text>
        <Text style={styles.text}>Next session: Cardio and Core on March 5th.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.header2}>Motivational Quote</Text>
        <Text style={styles.text}>The only bad workout is the one that didn't happen.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
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
    margin: 20, 
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
    margin: 10,
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


