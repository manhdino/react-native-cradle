import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {React} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {LoginScreen, Register} from './src/LoginScreen';
import {ListCradle} from './src/ListCradleScreen';
import {CustomDrawer, Home} from './src/HomeScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeDrawer({route, navigation}) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        <Stack.Screen name="ListCradle" component={ListCradle} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
));
