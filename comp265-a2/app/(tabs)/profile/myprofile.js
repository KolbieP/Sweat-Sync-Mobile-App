import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MyprofileScreen() {

  const color = '#ff3300';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Profile</Text>
      <View style={styles.iconContainer}><Ionicons name="person" color={color} size={80} /></View>
      <View style={styles.row}>
        <Text style={styles.text}>First Name</Text>
        <Text style={styles.text2}>Alec</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Last Name</Text>
        <Text style={styles.text2}>Garner</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Birthday</Text>
        <Text style={styles.text2}>January 1 1990</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text2}>alecgarner@gmail.com</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Home Location</Text>
        <Text style={styles.text2}>Preston</Text>
      </View>
      <Text style={styles.header2}>Activity Summary:</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Total Workouts Completed</Text>
        <Text style={styles.text3}>124</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Total Hours Spent</Text>
        <Text style={styles.text3}>268</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Average Workout Duration</Text>
        <Text style={styles.text3}>62 min</Text>
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
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
    marginVertical: 10,
    flex: 1,
  },
  text2: {
    color: '#7BBFFF',
    fontSize: 18,
    margin: 10,
  },
  text3: {
    color: '#ff3300',
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
    color: '#ff3300',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  
  },
  iconContainer: {
    backgroundColor: '#41474D',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
