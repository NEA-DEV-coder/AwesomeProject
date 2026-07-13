import { StyleSheet } from 'react-native';
import { fontScale, horizontalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    fontSize: fontScale(16),
    color: '#022150',
    fontWeight: 500,
    padding: horizontalScale(12),
  },
  titleNotFocused: {
    color: '#79869f',
  },
});

export default style;
