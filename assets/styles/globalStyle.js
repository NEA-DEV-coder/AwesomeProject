import { StyleSheet } from 'react-native';

const globalStyle = StyleSheet.create({
  header: {
    // marginLeft: 27,
    // marginRight: 17,
    marginTop: 30,
    // display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#f1f3f5',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    marginTop: 12,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 6,
    fontWeight: 600,
    fontFamily: 'bold',
  },

  userStoryContainer: {
    marginTop: 20,
  },

  userPostsConatiner: {
    marginHorizontal: 0,
    marginTop: 10,
  },
});

export default globalStyle;
