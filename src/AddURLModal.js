import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Portal, Modal, HelperText} from 'react-native-paper';

const AddURLModal = props => {
  const {isVisible, onURLEntered} = props;
  const [url, setURL] = useState('');
  const [urlErrorMessage, setURLErrorMessage] = useState('');
  const [showURLModal, setShowURLModal] = useState(isVisible);

  useEffect(() => {
    setShowURLModal(isVisible);
  }, [isVisible]);

  const onURLPressed = () => {
    if (url.length > 0 && url.toLowerCase().includes('www')) {
      onURLEntered(url);
      setURL('');
      setShowURLModal(false);
      setURLErrorMessage('');
    } else {
      setURLErrorMessage('Please Enter Valid URL');
    }
  };

  const onURLCancel = () => {
    setURL('');
    setShowURLModal(false);
  };
  return (
    <Portal>
      <Modal
        style={{margin: 10}}
        visible={showURLModal}
        onDismiss={() => {
          setShowURLModal(false);
        }}
        contentContainerStyle={{backgroundColor: 'white', padding: 20}}>
        <View>
          <TextInput
            label="URL"
            testID="urlTextInput"
            value={url}
            onChangeText={text => setURL(text)}
          />
          <HelperText testID="urlTextInputErrorMessage" type="error">
            {urlErrorMessage}
          </HelperText>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button mode="contained" testID="buttonURL" onPress={onURLPressed}>
              Enter URL
            </Button>

            <Button
              mode="contained"
              testID="buttonURLCancel"
              onPress={onURLCancel}>
              Cancel
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};
export default AddURLModal;
