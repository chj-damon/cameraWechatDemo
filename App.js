import React from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const App: () => React$Node = () => {
  const barcodeRecognized = ({barcodes}) => {
    barcodes.forEach((barcode) => console.warn(barcode.data));
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        style={{
          flex: 1,
          width: '100%',
        }}
        onGoogleVisionBarcodesDetected={barcodeRecognized}
      />
    </View>
  );
};

export default App;
