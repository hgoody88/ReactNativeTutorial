import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useState, useEffect, useCallback } from 'react'
import BasicInputPage from './src/BasicInputPage'
import Lists from './src/Lists'
import DailyThingTracker from './src/DailyThingTracker/DailyThingTracker'
import Sandbox from './src/FlexSandbox/Sandbox'
import Home from './src/ReviewApp/Screens/Home'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'
import HomeStack from './src/routes/homeStack'

SplashScreen.preventAutoHideAsync();

const getFonts = () => Font.loadAsync({
  'Yugioh-Matrix': require('./assets/fonts/Yu-Gi-Oh_MatrixBook.ttf'),
  'Yugioh-Stone': require('./assets/fonts/Stone_Serif_Semibold.ttf')
})


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await getFonts()
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);


  if(appIsReady) {
    return (
      <HomeStack />
    )
  }
  else {
    return (
      <View style={{padding: 40}}>
        <Text>
          LOADING...
        </Text>
      </View>
    )
  }  
}
