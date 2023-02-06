import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { RootStackParamList } from '../../routes/homeStack'

type homeScreenProp = StackNavigationProp<RootStackParamList, 'home'>

export interface player {
  key: number,
  name: string,
  rating: number,
  summary: string
}

export default function Home() {

  const [players, setPlayers] = useState<player[]>([
    {key: 0, name: 'Genge', rating: 9, summary: 'he is always great'},
    {key: 1, name: 'Faz', rating: 9, summary: 'all time legend'},
    {key: 2, name: 'Smith', rating: 8, summary: 'was really good'},
    {key: 3, name: 'Ludlham', rating: 8, summary: 'so physical'},
  ])

  const navigation = useNavigation<homeScreenProp>()


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Players</Text>
      {players.map(player => {
        return (
          <View
            key={player.key}
            style={styles.player}
          >
            <TouchableOpacity onPress={() => navigation.navigate('reviewDetails', {player})}>
              <Text>{player.name}</Text>
            </TouchableOpacity>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  player: {
    padding: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginTop: 10
  }
})