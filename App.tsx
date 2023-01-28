import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('Harry')
  let numberOfUpdates = 1.0

  const updateNameButtonHandler = () => {
    numberOfUpdates++
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
  }
})
