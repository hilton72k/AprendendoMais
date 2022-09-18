import React,{useState} from "react";
import { Text, View, StyleSheet, Switch } from "react-native";

export default function App() {

    const [status, setStatus] = useState(false)

    return(
      <View style={styles.container}>

        <Switch
          value={status}
          onValueChange={valor => setStatus(valor)}
        />

        <Text>Status: {String(status)}</Text>

      </View>
    )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    marginTop: 35
  }

})