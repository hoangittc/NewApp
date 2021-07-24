import { Dimensions } from 'react-native';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

export const Width = (num: number) => widthWindow * (num / 100);
export const Height = (num: number) => heightWindow * (num / 100);

