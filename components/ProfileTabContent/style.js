import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';
// import ProfileTabContent from './ProfileTabContent';

const style = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: '#fff',
  },
  ProfileTabContent: {
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(140),
    height: 90,
    marginTop: verticalScale(11),
  },
});

export default style;
