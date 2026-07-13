import { StyleSheet } from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(90),
    height: horizontalScale(90),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150ec',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(90),
  },
  userName: {
    marginTop: verticalScale(16),
    textAlign: 'center',
    fontSize: fontScale(20),
    fontWeight: 600,
  },

  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(20),
    borderBottomWidth: 1,
    color: '#79869f',
  },

  statBorder: {
    borderRightWidth: 1,
    borderColor: '#e9eff1',
  },

  statAmount: {
    fontSize: fontScale(18),
    color: '#022150',
    fontWeight: 600,
    textAlign: 'center',
  },

  statType: {
    color: '#79869f',
    fontSize: fontScale(12),
    fontWeight: 400,
    textAlign: 'center',
  },
});

export default style;
