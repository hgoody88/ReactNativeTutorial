import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/globalStyles'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation, useRoute } from '@react-navigation/native'
import { player } from './Home'
import { ReviewDetailsRouteProp, ReviewDetailsScreenProp, RootStackParamList } from '../../routes/homeStack'
import { StackNavigationProp } from '@react-navigation/stack'


const ReviewDetails = () => {
  const navigation = useNavigation()
  const route = useRoute<ReviewDetailsRouteProp>()
  const player = route.params.player
  const pressHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <Text>{player.name}</Text>
      <Text>Rating: {player.rating}</Text>
      <Text>Summary: {player.summary}</Text>

      <Button title='Back to home' onPress={pressHandler}/>
    </View>
  )
}

export default ReviewDetails
