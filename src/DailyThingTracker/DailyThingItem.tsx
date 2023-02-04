import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

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
        <View style={styles.thing}>
          <MaterialIcons name="delete" size={24} color="grey" />
          <Text>{thing.id}: {thing.info}</Text>
        </View>
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
    borderRadius: 10,

    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  }
})