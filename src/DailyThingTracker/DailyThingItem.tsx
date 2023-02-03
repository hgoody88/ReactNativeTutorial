import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export interface IDailyThing {
    info: string,
    id: number
}

export interface Props {
  thing: IDailyThing,
  pressHandler: (key: number) => void
}

export default function DailyThingItem( {thing, pressHandler}: Props ) {
    return (
      <TouchableOpacity onPress={() => pressHandler(thing.id)}>
        <Text style={styles.thing}>{thing.id}: {thing.info}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  thing: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})