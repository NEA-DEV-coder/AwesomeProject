import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#eff2f6',
  },
  userContainer: { flexDirection: 'row' },
  userTextContainer: { justifyContent: 'center', marginLeft: 10 },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: '#000',
    fontWeight: 600,
    fontSize: 16,
  },
  location: {
    color: '#777',
    fontWeight: 400,
    fontSize: 12,
    marginTop: 5,
    marginLeft: -4,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },

  userPostStat: { marginLeft: 10, flexDirection: 'row' },
  userPostStatButton: { flexDirection: 'row', alignItems: 'center' },
  userPostStatButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 27,
  },
  postIconText: { marginLeft: 3, color: '#79869f' },
});

export default style;
