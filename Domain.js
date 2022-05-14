import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {TextInput, Button, Portal, Modal} from 'react-native-paper';

const Domain = props => {
  const {isVisible, onDomainEntered} = props;
  const [domain, setDomain] = useState('');
  const [showDomainModal, setShowDomainModal] = useState(isVisible);

  useEffect(() => {
    setShowDomainModal(isVisible);
  }, [isVisible]);

  const onDomainPressed = () => {
    onDomainEntered(domain);
    setDomain('');
    setShowDomainModal(false);
  };
  return (
    <Portal>
      <Modal
        visible={showDomainModal}
        onDismiss={() => {
          setShowDomainModal(false);
        }}
        contentContainerStyle={{backgroundColor: 'white', padding: 20}}>
        <View>
          <TextInput
            label="Domain"
            testID="domainTextInput"
            value={domain}
            onChangeText={text => setDomain(text)}
          />
          <Button
            mode="contained"
            testID="buttonDomain"
            onPress={onDomainPressed}>
            Enter Domain
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};
export default Domain;
