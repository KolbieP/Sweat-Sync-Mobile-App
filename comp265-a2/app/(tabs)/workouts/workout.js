import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../../../assets/blue-logo.png';

export default function WorkoutScreen() {

  const color = '#ff3300';
  const [workouts, setWorkouts] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("Moderate");
  const [type, setType] = useState("Full Body Workout");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        if (storedWorkouts) {
          setWorkouts(JSON.parse(storedWorkouts));
        }
      } catch (error) {
        console.error("Failed to load workouts", error);
      }
    };

    loadWorkouts();
  }, []);

  useEffect(() => {
    const saveWorkouts = async () => {
      try {
        await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
      } catch (error) {
        console.error("Failed to save workouts", error);
      }
    };

    saveWorkouts();
  }, [workouts]);

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  const handleSubmit = () => {
    if (workoutName && date && duration) {
      console.log("Adding workout:", { workoutName, date, duration, intensity, type, notes });
      setWorkouts([...workouts, { id: Date.now(), workoutName, date, duration, intensity, type, notes, completed: false }]);
      setWorkoutName("");
      setDate("");
      setDuration("");
      setIntensity("Moderate");
      setType("Full Body Workout");
      setNotes("");
    } else {
      console.log("Missing required fields");
    }
  };

  const handleToggleCompleted = (id) => {
    setWorkouts(
      workouts.map((workout) => {
        if (workout.id === id) {
          return { ...workout, completed: !workout.completed };
        } else {
          return workout;
        }
      })
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.header}>Workout Log</Text>
          <Text style={styles.header2}>Your Path to Fitness</Text>
          <View style={styles.logcontainer}>
            <TextInput
              value={workoutName}
              onChangeText={setWorkoutName}
              placeholder="Enter workout name"
              placeholderTextColor="#fff"
              style={styles.input}
            />
            <Text style={styles.header3}>Type of Workout:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={type}
                style={styles.picker}
                onValueChange={(itemValue) => setType(itemValue)}>
                <Picker.Item label="Full Body Workout" value="Full Body Workout" />
                <Picker.Item label="Cardio" value="Cardio" />
                <Picker.Item label="Strength Training" value="Strength Training" />
                <Picker.Item label="HIIT" value="HIIT" />
                <Picker.Item label="Yoga" value="Yoga" />
                <Picker.Item label="Pilates" value="Pilates" />
                <Picker.Item label="Upper Body Workout" value="Upper Body Workout" />
                <Picker.Item label="Lower Body Workout" value="Lower Body Workout" />
                <Picker.Item label="Core Workout" value="Core Workout" />
                <Picker.Item label="Cardio and Core" value="Cardio and Core" />
                <Picker.Item label="Flexibility and Stretching" value="Flexibility and Stretching" />
                <Picker.Item label="Run" value="Run" />
                <Picker.Item label="Walk" value="Walk" />
                <Picker.Item label="Stairs" value="Stairs" />
                <Picker.Item label="Hockey" value="Hockey" />
                <Picker.Item label="Softball" value="Softball" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </View>
            <TextInput
              value={date}
              onChangeText={setDate}
              placeholder="Select date"
              placeholderTextColor="#fff"
              style={styles.input}
            />
            <TextInput
              value={duration}
              onChangeText={setDuration}
              placeholder="Enter duration (e.g., 45 minutes)"
              placeholderTextColor="#fff"
              style={styles.input}
            />
            <Text style={styles.header3}>Workout Intensity:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={intensity}
                style={styles.picker}
                onValueChange={(itemValue) => setIntensity(itemValue)}>
                <Picker.Item label="Low" value="Low" />
                <Picker.Item label="Moderate" value="Moderate" />
                <Picker.Item label="High" value="High" />
              </Picker>
            </View>
            <TextInput
              value={notes}
              onChangeText={setNotes}
              placeholder="Add any additional notes about your workout"
              placeholderTextColor="#fff"
              style={styles.input}
            />
            <Button
              onPress={handleSubmit}
              title="Add workout"
              color="#7BBFFF"
              accessibilityLabel="Submit a new workout"
            />
          </View>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>

          {workouts.map((workout) => (
            <View key={workout.id} style={styles.workoutContainer}>
              <TouchableOpacity onPress={() => handleToggleCompleted(workout.id)}>
                <Text style={[styles.workoutText, workout.completed && styles.completedText]}>
                  {workout.workoutName} - {workout.date} - {workout.duration} - {workout.intensity} - {workout.type}
                </Text>
                {workout.notes ? <Text style={styles.notesText}>{workout.notes}</Text> : null}
              </TouchableOpacity>
              <Button
                onPress={() => handleDeleteWorkout(workout.id)}
                title="Delete"
                color="#ff3300"
                accessibilityLabel="Delete workout item"
              />
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 20,
  },
  logcontainer: {
    backgroundColor: '#41474D',
    padding: 20,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  pickerContainer: {
    width: '90%',
    backgroundColor: '#41474D',
    borderRadius: 5,
    marginVertical: 5,
  },
  picker: {
    height: 50,
    color: '#fff',
  },
  workoutContainer: {
    backgroundColor: '#41474D',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  workoutText: {
    color: '#fff',
    fontSize: 18,
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
  notesText: {
    color: '#7BBFFF',
    fontSize: 16,
    marginTop: 5,
  },
  input: {
    backgroundColor: '#25292e',
    padding: 10,
    marginVertical: 5,
    width: '90%',
    borderRadius: 5,
    color: '#7BBFFF',
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
    fontSize: 16,
    color: '#7BBFFF',
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
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
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


