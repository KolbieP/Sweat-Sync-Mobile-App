import { Text, View, StyleSheet, Switch, ScrollView, Image, TouchableOpacity } from 'react-native';
import logo from '../../../assets/blue-full-logo.png';
import { useLocalSearchParams, useRouter } from "expo-router";
import { Link } from 'expo-router';

export default function GroupWorkoutScreen() {

  const { groupType, date, time, instructor } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.header}>Book Group {groupType} Now</Text>
        <View style={styles.card}>
          <Text style={styles.header2}>Group {groupType}</Text>
          <Text style={styles.text}>{date}</Text>
          <View style={styles.row}>
            <Text style={styles.text}>{time}</Text>
            <Text style={styles.text}>{instructor}</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/modal')} style={styles.button}><Text style={styles.text}>Reserve Seat</Text></TouchableOpacity>
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
    width: 300,
    height: 300,
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
