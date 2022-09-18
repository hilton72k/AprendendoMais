import React from "react";
import {View, Text, StyleSheet} from 'react-native'

function Pessoa(props){
  const {nome, idade, email, _id} = props.data
  return (
    <View style={styles.areaPessoa}>      
      <Text style={styles.textoPessoa}>Meu nome é: {nome}</Text>
      <Text style={styles.textoPessoa}>Tenho {idade} de idade</Text>
      <Text style={styles.textoPessoa}>Meu email é: {email}</Text>
      <Text style={styles.textoPessoa}>Meu ID é: {_id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#121212'
    ,height: 200
    ,marginBottom: 15
    ,justifyContent: 'center'
  },
  textoPessoa: {
    fontSize: 20
    ,color: '#FFF'
  }
})

export default Pessoa