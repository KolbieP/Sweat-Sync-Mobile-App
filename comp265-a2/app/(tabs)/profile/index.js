import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen</Text>
      <Link href="/profile/profile?person=arlin" style={styles.button}>
        Go to Profile screen - Arlin
      </Link>
      <Link href="/profile/profile?person=craig" style={styles.button}>
        Go to Profile screen - Craig
      </Link>
      <Link href="/profile/profile?person=mike" style={styles.button}>
        Go to Profile screen - Mike
      </Link>
      <Link href="/profile/settings/" style={styles.button}>
        Go to Settings Screen
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