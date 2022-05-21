import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import Login from './Login';
import URLList from './URLList';
import {Provider as PaperProvider} from 'react-native-paper';
import appStore from './store/appStore';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={appStore}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="URLList" component={URLList}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
