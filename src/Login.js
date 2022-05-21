import React, {useEffect, useState} from 'react';

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
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {actions} from './domainStore/slice';

const Login = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {Reducer} = useSelector(reducer => ({Reducer: reducer.domain.domain}));
  const dispatch = useDispatch();
  console.log('addURL', Reducer.domainList);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [domainList, setDomainList] = React.useState();
  const [showDomainModal, setShowDomainModal] = React.useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (Reducer) {
      setDomainList(Reducer.domainList);
    }
  }, [Reducer]);

  const onLoginPressed = () => {
    if (username.length > 0 && password.length > 0) {
      setShowDomainModal(!showDomainModal);
    }
  };

  const onDomainEntered = domainName => {
    setShowDomainModal(!showDomainModal);
    dispatch(actions.addDomain(domainName));
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
