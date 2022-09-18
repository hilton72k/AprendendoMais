import React,{useState} from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {

    const [carro, setCarro] = useState(0)
    const [carros, setCarros] = useState([
      { key: 1, nome: 'Golf 1.6', valor: 62.000  }
     ,{ key: 2, nome: 'Camaro Amarelo', valor: 70.000  }
     ,{ key: 3, nome: 'Mustang Vermelho', valor: 80.000  }
     ,{ key: 4, nome: 'Land Hover', valor: 90.000  }
   ])

    let itemCarros = carros.map( (v, i) => {
      return <Picker.Item key={i} value={i} label={v.nome} />
    })

    return(
      <View>
        <Picker
          selectedValue={carro}
          onValueChange={(item, i) => setCarro(item)}
        > 

          {itemCarros}
        </Picker>

        <Text>{carros[carro].nome}</Text>
      </View>
    )
}