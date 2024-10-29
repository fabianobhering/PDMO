import { Text, View, Image } from "react-native";
import { Link } from "expo-router"; 


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
     <Image source={require('./../../../assets/images/react-logo.png')} />
     <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Logo_CEFET-MG.png/800px-Logo_CEFET-MG.png' }} style={{ width: 100, height: 100 }} />

      <Text>HOME</Text>
      <Link href="/details">IR PARA DETAILS</Link>
    </View>
  );
}
