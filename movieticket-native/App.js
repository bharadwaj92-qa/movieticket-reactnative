import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Latestmovies from './components/Latestmovies';
import Moviedetails from './components/Moviedetails'
import Ticketbook from './components/Ticketbook';
import Bookedticket from './components/Bookedticket';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './features/store'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      {/* <Latestmovies /> */}
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName='Latestmovies'> */}
        <Stack.Navigator>
          <Stack.Screen name='Latestmovies' component={Latestmovies} />
          <Stack.Screen name='Moviedetails' component={Moviedetails} />
          <Stack.Screen name='Ticketbook' component={Ticketbook} />
          <Stack.Screen name='Bookedticket' component={Bookedticket} />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
    // <View style={styles.container}>
    //   <Text style={styles.header}>Open up App.js to start working on your app!</Text>
    //   {/* <Header /> */}
    //   <StatusBar style="auto" />
    // </View>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
