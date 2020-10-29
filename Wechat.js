import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as Wechat from 'react-native-wechat-lib';

export default () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => Wechat.shareText({text: 'hahahah', scene: 1})}>
        <Text>分享到微信</Text>
      </TouchableOpacity>
    </View>
  );
};
