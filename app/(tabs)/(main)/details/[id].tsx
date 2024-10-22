import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function Details() {
  const { id } = useLocalSearchParams();
  
  return (
   
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>DETAILS DO ITEM {id}</Text>
      <Link href="/(main)">VOLTAR PARA MAIN</Link>

    </View>
  );
}
