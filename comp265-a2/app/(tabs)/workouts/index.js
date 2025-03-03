import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import image from '../../../assets/workout-page.jpg';
import logo from '../../../assets/blue-logo.png';

export default function WorkoutsScreen() {

  const focused = true;
  const color = '#ff3300';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>Welcome to your Workout Hub</Text>
      <Text style={styles.text}>Effortlessly log your workouts and strategically plan your next session to stay on track with your fitness goals.</Text>
      <Image source={image} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.header2}>Log Your Workout</Text>
        <View style={styles.iconContainer}><Ionicons name="create-outline" color={color} size={24} /></View>
        <Text style={styles.text}>Keep a detailed record of your workouts to monitor your progress and stay motivated. Click below to log a new workout session.</Text>
        <Link href="/workouts/workout/" style={styles.button}>
          Log Workout
        </Link>
      </View>
      <View style={styles.card}>
        <Text style={styles.header2}>Gym Workouts</Text>
        <View style={styles.iconContainer}><Ionicons name="barbell-outline" color={color} size={24} /></View>
        <Text style={styles.text}>Explore a variety of gym workouts tailored to your fitness level and goals. Plan your next session and stay prepared.</Text>
        <Link href="/workouts/gym/" style={styles.button}>
          Gym Workouts
        </Link>
      </View>  
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
    margin: 20,
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
  logo: {
    width: 200,
    height: 200,
  },
  image: {
    width: 320,
    height: 213,
    borderRadius: 20, 
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

