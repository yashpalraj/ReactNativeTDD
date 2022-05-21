import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Portal, Modal, HelperText} from 'react-native-paper';

const Domain = props => {
  const {isVisible, onDomainEntered} = props;
  const [domain, setDomain] = useState('');
  const [domainErrorMessage, setDomainErrorMessage] = useState('');
  const [showDomainModal, setShowDomainModal] = useState(isVisible);

  useEffect(() => {
    setShowDomainModal(isVisible);
  }, [isVisible]);

  const onDomainPressed = () => {
    if (domain.length > 0) {
      onDomainEntered(domain);
      setDomain('');
      setShowDomainModal(false);
      setDomainErrorMessage('');
    } else {
      setDomainErrorMessage('Please Enter Valid Domain');
    }
  };

  const onDomainCancel = () => {
    setDomain('');
    setShowDomainModal(false);
  };
  return (
    <Portal>
      <Modal
        style={{margin: 10}}
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
          <HelperText testID="domainTextInputErrorMessage" type="error">
            {domainErrorMessage}
          </HelperText>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              mode="contained"
              testID="buttonDomain"
              onPress={onDomainPressed}>
              Enter Domain
            </Button>

            <Button
              mode="contained"
              testID="buttonDomainCancel"
              onPress={onDomainCancel}>
              Cancel
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};
export default Domain;
