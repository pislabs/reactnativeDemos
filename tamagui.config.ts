import {defaultConfig} from '@tamagui/config/v4';
import {createTamagui} from 'tamagui';

export const config = createTamagui({});

type OurConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}
