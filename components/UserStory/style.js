import { StyleSheet } from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(10),
  },
  firstName: {
    textAlign: 'center',
    fontSize: fontScale(14),
    fontWeight: 500,
    color: '#022150',
    marginTop: verticalScale(5),
  },
});

export default style;
