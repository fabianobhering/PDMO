import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="details" options={{headerShown:false}}/>
      <Stack.Screen name="form" options={{headerShown:false}}/>
      <Stack.Screen name="details/[id]" options={{headerShown:false}}/>
      <Stack.Screen name="modal" options={{presentation: 'modal'}}/>
    </Stack>
  );
}
