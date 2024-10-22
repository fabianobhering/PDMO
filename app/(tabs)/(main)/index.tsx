import { Text, View } from "react-native";
import { Link } from "expo-router"; 

export default function Index() {
  const id ="4";
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>HOME</Text>
      <Link href="/details">IR PARA DETAILS</Link>
      <Link href="/details/1">IR PARA DETAILS DO ITEM 1</Link>
      <Link href="/details/2">IR PARA DETAILS DO ITEM 2</Link>
      <Link href="/details/3">IR PARA DETAILS DO ITEM 3</Link>

      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: `${id}` },
        }}>
        IR PARA DETAILS DO ITEM {id}
      </Link>
    </View>
  );
}
