import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sandbox() {
  return (
    <View style={styles.container}>
        <Text style={styles.box0}>Sandbox0</Text>
        <Text style={styles.box1}>Sandbox1</Text>
        <Text style={styles.box2}>Sandbox2</Text>
        <Text style={styles.box3}>Sandbox3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', // main axis
        alignItems: 'flex-end', // secondary axis
        padding: 40,
        backgroundColor: '#ddd'
    },
    box0: {
        flex: 5,
        backgroundColor: 'violet',
        padding: 10
    },
    box1: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20
    },
    box2: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30
    },
    box3: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 40
    }
})