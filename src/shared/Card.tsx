import { View, Text, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'

export default function Card(props: PropsWithChildren) {
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            {props.children}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6, 
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowRadius: 4
    },
    cardContent: {
        margin: 15
    }
})