import { Dimensions } from 'react-native';
// import { DeviceInfo } from 'react-native/types_generated/index';

const { width, height } = Dimensions.get('window');

const isSmall = width <= 360;

const guidelineBaseWidth = isSmall ? 320 : 360;
const guidelineBaseHeight = isSmall ? 568 : 640;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;

const guidelineBaseFonts = isSmall ? 14 : 16;
const fontScale = size =>
  Math.round((size * (width / guidelineBaseWidth)) / guidelineBaseFonts) *
  guidelineBaseFonts;

export { horizontalScale, verticalScale, fontScale };
