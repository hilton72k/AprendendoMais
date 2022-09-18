import React, {useState} from "react";
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native'
import Pessoa from "./components/Pessoa";

function App () {

  const [feed, setFeed] = useState([
    {_id: 1, nome:"James Moreira", idade:25, email: 'hilton72k@hotmail.com'},
    {_id: 2, nome:"James Hilton",  idade:25, email: 'james.filho@fieb.org.br'},
    {_id: 3, nome:"James Bezerra", idade:25, email: 'hiltonmoreira72k@gmail.com'},
    {_id: 4, nome:"James Filho",   idade:25, email: 'hilton72k@hotmail.com'},
    {_id: 5, nome:"Livia Guirra",  idade:20, email: 'liviaguirra@hotmail.com'},
  ])

  return(
    <View style={styles.container}>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        data={feed}
        renderItem={ ({item}) => <Pessoa data={item} /> }
      />
      
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  areaPessoa: {
    backgroundColor: '#CCC'
    ,height: 200
    ,marginBottom: 15
    ,justifyContent: 'center'
  }
})

export default () => App()