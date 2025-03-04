import { Text, View, StyleSheet, Switch, ScrollView, Image } from 'react-native';
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
            <Text style={styles.header2}>Group Power</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>5:30am-6:30am</Text>
              <Text style={styles.text}>Heather N.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Physique</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>9:30am-10:30am</Text>
              <Text style={styles.text}>Nichole P.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group R30</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>12:00pm-12:30pm</Text>
              <Text style={styles.text}>Amy F.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Ride</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>5:30pm-6:30pm</Text>
              <Text style={styles.text}>Shelley H.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Zumba</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>7:00pm-8:00pm</Text>
              <Text style={styles.text}>Paula H.</Text>
            </View>
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
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Power</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>9:30am-10:30am</Text>
              <Text style={styles.text}>Amy F.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Ride</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>9:30am-10:30am</Text>
              <Text style={styles.text}>Dina R.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Ride</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>5:30am-6:30am</Text>
              <Text style={styles.text}>Alison F.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.header2}>Group Yoga</Text>
            <Text style={styles.text}>Monday 3/3</Text>
            <View style={styles.row}>
              <Text style={styles.text}>5:30pm-6:15pm</Text>
              <Text style={styles.text}>Andie V.</Text>
            </View>
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
});
