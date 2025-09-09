import {TamaguiProvider, createTamagui} from '@tamagui/core';

import {View, Text, Button} from 'tamagui';

import {config} from './tamagui.config.ts';

export default () => {
  return (
    <TamaguiProvider config={config}>
      <View width={200} height={200} backgroundColor="red">
        <Text color="#f2f2f2" fontSize={24}>
          Tamagui can optimize this to div + span or View + Text on React
          Native.
        </Text>
      </View>
    </TamaguiProvider>
  );
};
