import { Stack } from 'expo-router';

export default function WorkoutsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Workouts' }} />
      <Stack.Screen name="gym" options={{ title: 'Gym Workouts' }} />
      <Stack.Screen name="workout" options={{ title: 'Log Workouts' }} />
      <Stack.Screen name="groupworkout" options={{ title: 'Book Now' }} />
    </Stack>
  );
}
