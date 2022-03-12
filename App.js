import * as React from 'react';
import { Text, View, StyleSheet, TextInput, H1, Button, } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <Text style={styles.label}>Altura:</Text>
      <TextInput style={styles.campo}/>
      <Text style={styles.label}>Peso:</Text>
      <TextInput style={styles.campo}/>
      <Button style={styles.botao}
        title='Calcular'
        color='#06c'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    margin: 20,
    width: "85%",
    height: "50%",
  },
  titulo:{
    fontFamily: "verdana",
    fontWeight: "bold",
    fontSize: 30,
    margin: "auto",
    textAlign: "center",
    marginBottom: 10,
  },
  campo:{
    margin: 15,
    marginBottom: 25, 
    height: 30,
    borderWidth: 0.5,
  }
});
