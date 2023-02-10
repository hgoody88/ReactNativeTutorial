import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import About from "../ReviewApp/Screens/About"


export type AboutRootStackParamList = {
    about: {
        title: 'About Player'
    }
} 

export type AboutScreenProp = NativeStackNavigationProp<AboutRootStackParamList, 'about'>
export type AboutRouteProp = RouteProp<AboutRootStackParamList, 'about'>

const Stack = createNativeStackNavigator<AboutRootStackParamList>()

const AboutStack = () => {
    return (
            <Stack.Navigator
                initialRouteName="about"
                screenOptions={{
                    headerTintColor: 'blue',
                    headerStyle: {
                        height: 80,
                        backgroundColor: 'coral'
                    }
                }}
            >
                <Stack.Screen name="about" component={About} />
            </Stack.Navigator>
    )
}

export default AboutStack