import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import logo from '../../../assets/blue-logo.png';

export default function SettingsScreen() {

  const focused = true;
  const color = '#ff3300';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.row}>
        <View style={styles.iconContainer}><Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={32} /></View>
        <Text style={styles.header}>Settings</Text>
      </View>
      <View style={styles.settingsContainer}>
        <Text style={styles.text}>Privacy</Text>
        <Text style={styles.text}>Notifications</Text>
        <Text style={styles.text}>About</Text>
        <Text style={styles.text}>Support</Text>
        <Text style={styles.text}>Language Preferences</Text>
        <Text style={styles.text}>Report a Problem</Text>
        <Text style={styles.text2}>Delete Account</Text>
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
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff3300',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#41474D',
    textAlign: 'left',
    width: '100%',
  },
  text2: {
    color: '#ff3300',
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#41474D',
    textAlign: 'left',
    width: '100%',
  },
  iconContainer: {
    padding: 10, 
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  
  },
  settingsContainer: {
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
  },
});


