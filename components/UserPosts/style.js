import { StyleSheet } from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(20),
    borderBottomWidth: 1,
    paddingBottom: verticalScale(20),
    borderBottomColor: '#eff2f6',
  },
  userContainer: { flexDirection: 'row' },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: '#000',
    fontWeight: 600,
    fontSize: fontScale(16),
  },
  location: {
    color: '#777',
    fontWeight: 400,
    fontSize: fontScale(14),
    marginTop: verticalScale(5),
    // marginLeft: -4,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },

  userPostStat: { marginLeft: horizontalScale(10), flexDirection: 'row' },
  userPostStatButton: { flexDirection: 'row', alignItems: 'center' },
  userPostStatButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizontalScale(20),
  },
  postIconText: { marginLeft: horizontalScale(3), color: '#79869f' },
});

export default style;
