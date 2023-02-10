import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './AboutStack';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator
            useLegacyImplementation={false}
        >
         <Drawer.Screen name="Home" component={HomeStack} />
         <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}