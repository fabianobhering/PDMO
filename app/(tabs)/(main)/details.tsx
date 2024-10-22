import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Details() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>DETAILS</Text>
      <Link href="/(main)">VOLTAR PARA MAIN</Link>

    </View>
  );
}
