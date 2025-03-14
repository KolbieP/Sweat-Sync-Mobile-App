import { Text, View, StyleSheet, Switch, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import React, {useState} from 'react';
import logo from '../../../assets/blue-logo.png';

export default function GymScreen() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>Classes</Text>
      <View style={styles.row}> 
        <Text style={styles.text}>Preston</Text>
        <Switch
          trackColor={{ false: '#b3daff', true: '#ff9980' }}
          thumbColor={isEnabled ? '#ff3300' : '#7BBFFF'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.text}>Blairmore</Text>
      </View>
      <Text style={styles.header2}>Upcoming</Text>
      {isEnabled ? (
        <View style={styles.blairmore}> 
          <View style={styles.card}>
            <Text style={styles.header2}>Group Ride</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>5:45am-6:45am</Text>
              <Text style={styles.text}>Heather N.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Ride&date=Monday%203/3&time=5:45am-6:45am&instructor=Heather%20N." style={styles.button}>Book Now</Link>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Power</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>9:30am-10:30am</Text>
              <Text style={styles.text}>Nichole P.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Power&date=Monday%203/3&time=9:30am-10:30am&instructor=Nichole%20P." style={styles.button}>Book Now</Link>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Yoga</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>12:00pm-12:30pm</Text>
              <Text style={styles.text}>Amy F.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Yoga&date=Monday%203/3&time=12:00pm-12:30pm&instructor=Amy%20F." style={styles.button}>Book Now</Link>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Ride</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>5:30pm-6:30pm</Text>
              <Text style={styles.text}>Shelley H.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Ride&date=Monday%203/3&time=5:30pm-6:30pm&instructor=Shelley%20H." style={styles.button}>Book Now</Link>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Yoga</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>7:00pm-8:00pm</Text>
              <Text style={styles.text}>Paula H.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Yoga&date=Monday%203/3&time=7:00pm-8:00pm&instructor=Paula%20H." style={styles.button}>Book Now</Link>
          </View>
        </View>
      ) : (
        <View style={styles.preston}> 
          <View style={styles.card}>
            <Text style={styles.header2}>Group Ride</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>5:30am-6:30am</Text>
              <Text style={styles.text}>Linda C.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Ride&date=Monday%203/3&time=5:30am-6:30am&instructor=Linda%20C." style={styles.button}>Book Now</Link>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Power</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>9:30am-10:30am</Text>
              <Text style={styles.text}>Amy F.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Power&date=Monday%203/3&time=9:30am-10:30am&instructor=Amy%20F." style={styles.button}>Book Now</Link>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Ride</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>9:30am-10:30am</Text>
              <Text style={styles.text}>Dina R.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Ride&date=Monday%203/3&time=9:30am-10:30am&instructor=Dina%20R." style={styles.button}>Book Now</Link>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Ride</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>5:30am-6:30am</Text>
              <Text style={styles.text}>Alison F.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Ride&date=Monday%203/3&time=5:30am-6:30am&instructor=Alison%20F." style={styles.button}>Book Now</Link>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Yoga</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>5:30pm-6:15pm</Text>
              <Text style={styles.text}>Andie V.</Text>
            </View>
            <Link href="/workouts/groupworkout?groupType=Yoga&date=Monday%203/3&time=5:30pm-6:15pm&instructor=Andie%20V." style={styles.button}>Book Now</Link>
          </View>
        </View>
      )}
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
    marginBottom: 20,
  },
  header2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7BBFFF',
    margin: 5,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  logo: {
    width: 200,
    height: 200,
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
