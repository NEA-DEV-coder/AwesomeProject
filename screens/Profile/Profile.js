import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import { ProfileTabsNavigation } from '../Home/navigation/MainNavigation';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              source={require('../../assets/img/default_profile.png')}
              style={style.profileImage}
            />
          </View>
        </View>
        <Text style={style.userName}>Ebuka Nwafor</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>30M</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>100</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
