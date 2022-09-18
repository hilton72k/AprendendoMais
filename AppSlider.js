import React,{useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

export default function App() {

    const [valor, setValue] = useState(50)

    return(
      <View style={styles.container}>
        
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={valor}
          onValueChange={valor => setValue(valor)}
        />

        <Text>{valor.toFixed(0)}</Text>

      </View>
    )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    marginTop: 35
  }

})