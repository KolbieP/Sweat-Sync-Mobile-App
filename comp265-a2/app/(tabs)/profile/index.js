import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import image from '../../../assets/lifting.jpg';

export default function ProfileScreen() {

  const color = '#ff3300';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.iconContainer}><Ionicons name="person" color={color} size={80} /></View>
      <Text style={styles.header}>Alec Garner</Text>
      <Text style={styles.header2}>Member</Text>
      <Link href="/profile/myprofile/" style={styles.button}>
        App Profile
      </Link>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>Manage app account information</Text>
      <Link href="/profile/settings/" style={styles.button}>
        Settings
      </Link>
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
  text: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  },
  header: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#fff',
    margin: 10, 
  },
  header2: {
    fontSize: 18, 
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
  iconContainer: {
    backgroundColor: '#41474D',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    width: 364,
    height: 205,
    borderRadius: 20, 
    padding: 20,
    margin: 20,
  },
});