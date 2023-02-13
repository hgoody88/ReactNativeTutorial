import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation, useRoute } from '@react-navigation/native'
import { player } from './Home'
import { ReviewDetailsRouteProp, ReviewDetailsScreenProp, RootStackParamList } from '../../routes/homeStack'
import { StackNavigationProp } from '@react-navigation/stack'
import Card from '../../shared/Card'


const ReviewDetails = () => {
  const navigation = useNavigation()
  const route = useRoute<ReviewDetailsRouteProp>()
  const player = route.params.player
  const pressHandler = () => {
    navigation.goBack()
  }

  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{player.name}</Text>
        <Text>Rating: {player.rating}</Text>
        <Text>Summary: {player.summary}</Text>
      </Card>
      <View style={styles.button}>
        <Button
          title='Back to home'
          onPress={pressHandler}
        />
      </View>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  button: {
    marginVertical: 20
  },
  playerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5
  }
})