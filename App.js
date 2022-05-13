/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, Text, TextInput} from 'react-native-paper';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onLoginPressed = () => {
    alert('Username--' + username + '----Password--' + password);
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text testID="welcomText">Welcome</Text>
          <TextInput
            label="Username"
            testID="username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            label="Password"
            testID="password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button
            mode="contained"
            testID="buttonLogin"
            onPress={onLoginPressed}>
            Login
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
