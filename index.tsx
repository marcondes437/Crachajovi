import { StyleSheet, View, Text, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={style.conteiner}>
      <Image
        source={{ uri: "https://www.zooplus.pt/magazine/wp-content/uploads/2023/03/boiadeiro-de-berna_1.webp" }}
        style={style.foto}
      />
      
      <Button
      title="Toque no cachorro"
      onPress={()=> {
        alert("Achouu o jovi!!!")
      }}
      />
      <View>
        <Text>Jovi </Text>
      </View>
    </View>
    
  );
}

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "blue",
    borderRadius: 10,
  },
  foto: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  }


},
);