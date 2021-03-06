import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import AddURLModal from './AddURLModal';
import {actions} from './domainStore/slice';

const URLList = ({navigation, route}) => {
  const {domainObj} = route.params;
  const [showURLModal, setShowURLModal] = useState(false);
  const [urlList, setURLList] = useState([]);

  const {Reducer} = useSelector(reducer => ({
    Reducer: reducer.domain.domain,
  }));

  const dispatch = useDispatch();

  // useEffect(() => {
  //   setURLList([...domainObj.savedURLList]);
  // }, [domainObj]);
  useEffect(() => {
    Reducer.domainList.forEach(element => {
      if (element.name === domainObj.name) {
        setURLList([...element.savedURLList]);
      }
    });
  }, [Reducer]);

  const onURLButtonClick = () => {
    setShowURLModal(!showURLModal);
  };

  const onURLEntered = enteredURL => {
    // const list = urlList;
    // list.push(enteredURL);
    // setURLList(list);

    // dispatch(
    //   actions.addURL({
    //     name: domainObj.name,
    //     savedURLList: [...domainObj.savedURLList, enteredURL],
    //   }),
    // );

    dispatch(actions.addURL({domain: domainObj.name, url: enteredURL}));
    setShowURLModal(!showURLModal);
  };

  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center', margin: 10, fontSize: 18}}>
        {domainObj.name}
      </Text>
      <Button
        style={{margin: 10}}
        mode="contained"
        testID="newUrlButton"
        onPress={onURLButtonClick}>
        Add URL
      </Button>
      <AddURLModal isVisible={showURLModal} onURLEntered={onURLEntered} />
      <FlatList
        style={{margin: 20}}
        data={urlList}
        keyExtractor={item => item}
        renderItem={item => {
          return (
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
              <Text style={{fontSize: 15}}>{item.item}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default URLList;
