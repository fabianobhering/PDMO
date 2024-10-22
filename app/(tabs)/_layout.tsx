import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)" options={{headerShown:false, title:"Home"}} />
      <Tabs.Screen name="(main)" options={{headerShown:false, title:"Principal"}} />
      <Tabs.Screen name="(settings)" options={{headerShown:false, headerTitle:"Configurações", title:"Configurações"}} />
    </Tabs>
  );
}
