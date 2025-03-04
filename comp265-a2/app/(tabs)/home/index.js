import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import image from '../../../assets/home-page.jpg';
import logo from '../../../assets/blue-full-logo.png'; 

export default function HomeScreen() {

  const [tipIndex, setTipIndex] = useState(0);
  const tips = [
    "Fuel your body with a balanced diet rich in proteins, carbs, and healthy fats.",
    "Always start with a warm-up and end with a cool-down to prevent injuries and aid recovery.",
    "Ensure you get adequate sleep to help your body recover and perform at its best.",
    "Focus on maintaining proper form to maximize effectiveness and prevent injuries.",
    "Set achievable fitness goals to stay motivated and track your progress."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 4000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>Welcome back Alec</Text>
      <Text style={styles.text}>Your journey to a healthier you starts here.</Text>
      <Image source={image} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.header2}>Fitness Tip:</Text>
        <Text style={styles.text}>{tips[tipIndex]}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/home/dashboard/" style={styles.button}>
          Dashboard
        </Link>
        <Link href="/home/details/" style={styles.button}>
          Details
        </Link>
      </View>
      <View style={styles.card}>
        <Text style={styles.header2}>Streak</Text>
        <Text style={styles.text}>You've worked out for <Text style={styles.highlight}>5</Text> consecutive days! Keep up the great work!</Text>
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
  text: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  },
  header: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#ff3300',
    marginBottom: 20, 
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
  highlight: {
    color: '#ff3300', 
    fontWeight: 'bold',
    fontSize: 20,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 10,
  },
  image: {
    width: 353,
    height: 236,
    borderRadius: 20, 
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    padding: 10,
  },
});

