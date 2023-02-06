import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import Home from '../ReviewApp/Screens/Home'
import ReviewDetails from '../ReviewApp/Screens/ReviewDetails'
import { player } from '../ReviewApp/Screens/Home'

export type RootStackParamList = {
  home: {
    title: 'hello'
  },
  reviewDetails: {
    player: player
  }
}

export type ReviewDetailsScreenProp = NativeStackNavigationProp<RootStackParamList, 'reviewDetails'>
export type ReviewDetailsRouteProp = RouteProp<RootStackParamList, 'reviewDetails'>

const Stack = createNativeStackNavigator<RootStackParamList>()

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='reviewDetails' component={ReviewDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default HomeStack
