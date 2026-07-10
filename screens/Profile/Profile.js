import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowAltCircleRight,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from '../Home/navigation/Routes';
import globalStyle from '../../assets/styles/globalStyle';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Text>Welcome to Profile Page</Text>
    </SafeAreaView>
  );
};

export default Profile;
