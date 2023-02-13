import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { RootStackParamList } from '../../routes/homeStack'
import Card from '../../shared/Card'

type homeScreenProp = StackNavigationProp<RootStackParamList, 'home'>

export interface player {
  key: number,
  name: string,
  rating: number,
  summary: string,
  imageSource?: string,
}

export default function Home() {

  const [players, setPlayers] = useState<player[]>([
    {key: 0, name: 'Genge', rating: 9, summary: 'he is always great', imageSource: 'genge.png'},
    {key: 1, name: 'Faz', rating: 9, summary: 'all time legend', imageSource: 'faz.png'},
    {key: 2, name: 'Smith', rating: 7, summary: 'seems to struggle'},
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
              <Card>
                <Text>{player.name}</Text>
              </Card>
            </TouchableOpacity>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  player: {
    marginTop: 10
  }
})