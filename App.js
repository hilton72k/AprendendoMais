import { Picker } from "@react-native-picker/picker";
import React,{useState} from "react";
import { Text, View, ScrollView, StyleSheet, Switch, TextInput, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Intl from "intl";
import 'intl/locale-data/jsonp/pt-BR'


function GetDados({data}) {

  return(
    <View style={{
      margin: 15,
      padding: 10,
      borderWidth:1,
      borderColor: "#CCC",
      backgroundColor: '#EEE',
      borderRadius: 5,
      elevation: 5,
      shadowColor: '#000',
      
    }}>
      <Text style={styles.texto}>Nome: {data.nome}</Text>
      <Text style={styles.texto}>Idade: {data.idade}</Text>
      <Text style={styles.texto}>Estudante: {data.estudante ? 'Sim' : 'Não'}</Text>
      <Text style={styles.texto}>Sexo: {data.sexo}</Text>
      <Text style={styles.texto}>Limite R$: {data.limite}</Text>
    </View>
  )

}

export default function App() {


    const conversorReal = (valor) => {

      valor = Math.ceil(valor / 10) * 10     
      

      valor = new Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(valor);     

      return valor

    }

    const [status, setStatus] = useState(false)
    const [estudante, setEstudante] = useState(false)
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState(0)
    const [limite, setLimite] = useState(1500)

    return(
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>


        <View style={styles.inputs}>

          <TextInput
            style={styles.nome}
            onChangeText={valor => 
              {setNome(valor) 
              setStatus(false) }}
            placeholder={"Nome Completo"}
          />

          <TextInput
            style={styles.idade}
            onChangeText={valor => {
              setIdade(valor) 
              setStatus(false) }}
            keyboardType={"numeric"}
            placeholder={"Idade"}
            maxLength={2}
          />
        </View>

        <View
  style={{
  borderWidth: 1,
  borderRadius: 5,
  marginLeft:8,
  marginRight: 5,
  marginBottom:15,
  marginTop:0,
  borderColor:'#CCC',
  padding:0
}}>
        <Picker selectedValue={sexo}
          onValueChange={(item, i) => setSexo(item)}>
          <Picker.Item key={0} value={""} label="Sexo" />
          <Picker.Item key={1} value={"Masculino"} label="Masculino" />
          <Picker.Item key={2} value={"Feminino"} label="Feminino" />
        </Picker>
        </View>


        <View
  style={{
  alignItems: 'center',
  borderRadius: 5,
  marginLeft:8,
  marginRight: 5,
  marginBottom:15,
  marginTop:0,
  borderColor:'#CCC',
  flexDirection: 'row',
  justifyContent: 'flex-start'
}}>     
        <Text style={{fontSize: 18, color: '#121212'}}>Estudante? </Text>
        <Switch
          value={estudante}
          onValueChange={valor => {
            setEstudante(valor) 
            setStatus(false) }}

        />
        </View>

        <View
  style={{
  borderRadius: 5,
  marginLeft:8,
  marginRight: 5,
  marginBottom:15,
  marginTop:0,
  borderColor:'#CCC',
}}>     
        <Text style={{fontSize: 16, color: '#121212', textAlign: 'center'}}>Limite de Crédito R$ (250,00 - 3.500,00) </Text>

        <Slider
        value={limite}
        minimumValue={250}
        maximumValue={3500}        
        onValueChange={valor => {
          setLimite(valor) 
          setStatus(false) }}
        />

        <Text style={{fontSize: 16, color: '#121212', textAlign: 'center'}}>R$ {conversorReal(limite)} </Text>
        
        </View>

        <TouchableOpacity style={ {
          borderWidth:3, 
          borderRadius: 50, 
          textAlign: 'center',
          borderColor: '#00FFAD',
          padding:10,
          marginHorizontal: 25,
          
          }} 
          onPress={ () => setStatus(true) }
          >
          <View>
            <Text style={{textAlign: "center", fontSize: 18, color:"#192440", fontWeight: "700" }}>Enviar Dados</Text>
          </View>
        </TouchableOpacity>

        { status ?  <GetDados data={{nome, idade, sexo, estudante, limite:conversorReal(limite)}}  /> : <Text></Text> }

      </ScrollView>
    )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    margin: 15,
    padding: 5,
    backgroundColor: '#EEE',
    borderRadius: 5,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    
  },
  texto: {
    marginBottom: 5,
    fontSize: 18,  
    color:'#121212'  
  },  
  inputs:{
    flexDirection:'row',
    padding: 5,
    justifyContent:"space-between",
    marginBottom:15
    
  },
  nome: {
    borderWidth:1,
    borderColor: "#CCC",
    width: '70%',
    borderRadius: 5,
    padding: 10
  },
  idade: {
    borderWidth:1,
    width: '20%',
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10
  }

  

})