import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'


export default function BasicInputPage() {
  const [name, setName] = useState('Harry')
  const [numberOfUpdates, setNumberOfUpdates] = useState(1)
  const [person, setPerson] = useState({name: 'Mario', age: 69})

  const updateNameButtonHandler = () => {
    setNumberOfUpdates(numberOfUpdates + 1)
    setName('Harry ' + numberOfUpdates)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldFont}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text>This is a super classy body</Text>
        <Text>Your name is: {name}</Text>
        <Text>Your hero's name is: {person.name} and he is {person.age} years old...</Text>
        
        <Text>Enter new hero's name:</Text>
        <TextInput
          style={styles.input} 
          placeholder={'e.g. Mr Hello World'}
          onChangeText={value => setPerson({name: value, age: person.age})}
        />
        <Text>Enter new hero's age:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input} 
          placeholder={'e.g. 69'}
          onChangeText={value => setPerson({name: person.name, age: Number(value)})}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title='Update Name'
          onPress={updateNameButtonHandler}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: 'pink'
  },
  boldFont: {
    fontWeight: 'bold'
  },
  body: {
    padding: 20,
    backgroundColor: 'yellow'
  },
  buttonContainer: {
    margin: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    margin: 10,
    padding: 8,
    width: 200
  }
})
