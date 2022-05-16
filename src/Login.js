import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  FlatList,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, Text, TextInput, Provider} from 'react-native-paper';
import Domain from './Domain';

const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [domainList, setDomainList] = React.useState([]);
  const [showDomainModal, setShowDomainModal] = React.useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onLoginPressed = () => {
    if (username.length > 0 && password.length > 0) {
      setShowDomainModal(!showDomainModal);
      // const array = new Array();
      // array.push('yash');
      // setDomainList(array);
    }
  };

  const onDomainEntered = domainName => {
    setShowDomainModal(!showDomainModal);
    const arr = domainList;
    arr.push(domainName);
    setDomainList(arr);
    setUsername('');
    setPassword('');
  };

  return (
    <Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            padding: 10,
          }}>
          <Text testID="welcomeText">Welcome</Text>
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

          <FlatList
            style={{margin: 20}}
            data={domainList}
            keyExtractor={item => item}
            renderItem={item => <Text style={{fontSize: 15}}>{item.item}</Text>}
          />
          <Domain
            isVisible={showDomainModal}
            onDomainEntered={onDomainEntered}
          />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default Login;
