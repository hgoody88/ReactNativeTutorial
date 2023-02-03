import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Daily Things</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 10,
        backgroundColor: 'coral'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
})