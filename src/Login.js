import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  FlatList,
  View,
  Pressable,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, Text, TextInput, Provider} from 'react-native-paper';
import Domain from './Domain';

const Login = ({navigation, route}) => {
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
    arr.push({name: domainName, savedURLList: ['www.gmail.com']});
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
            keyExtractor={item => item.name}
            renderItem={item => {
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate('URLList', {
                      domainObj: item.item,
                    });
                  }}>
                  <View
                    style={{
                      borderColor: '#000000',
                      borderRadius: 10,
                      borderWidth: 2,
                      marginVertical: 10,
                      marginHorizontal: 5,
                      padding: 5,
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{fontSize: 15}}>{item.item.name}</Text>
                  </View>
                </Pressable>
              );
            }}
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
