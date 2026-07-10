import { StyleSheet } from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    // marginLeft: 27,
    // marginRight: 17,
    marginTop: verticalScale(20),
    // display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerMenu: {
    padding: horizontalScale(10),
  },
  messageIcon: {
    padding: horizontalScale(10),
    backgroundColor: '#f1f3f5',
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: horizontalScale(14),
    height: horizontalScale(14),
    borderRadius: horizontalScale(14),
    alignItems: 'center',
    position: 'absolute',
    right: horizontalScale(8),
    marginTop: verticalScale(6),
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: fontScale(8),
    fontWeight: 600,
    fontFamily: 'bold',
  },

  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(0),
  },

  userPostsConatiner: {
    marginHorizontal: 0,
    marginTop: 10,
  },
});

export default style;
