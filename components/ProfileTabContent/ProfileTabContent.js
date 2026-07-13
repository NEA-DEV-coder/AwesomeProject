import React, { Image, ScrollView, View } from 'react-native';
import style from './style';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContentContainer}
    >
      <View style={style.ProfileTabContent}>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/img/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/img/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/img/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/img/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/img/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/img/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/img/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/img/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
