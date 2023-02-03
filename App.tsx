import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useState } from 'react'
import BasicInputPage from './src/BasicInputPage'
import Lists from './src/Lists'
import DailyThingTracker from './src/DailyThingTracker/DailyThingTracker'

export default function App() {
  return (
    <DailyThingTracker />
  )
  
}
