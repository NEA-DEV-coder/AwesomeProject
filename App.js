import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { getFontFamily } from './assets/fonts/helper';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import { useState, useEffect } from 'react';
import UserPost from './components/UserPosts/UserPost';

function App() {
  const userStories = [
    {
      firstName: 'Ebuka',
      id: 1,
      profileImage: require('./assets/img/default_profile.png'),
    },

    {
      firstName: 'Confi',
      id: 2,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Pius',
      id: 3,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Timi',
      id: 4,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Daniel',
      id: 5,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Gideon',
      id: 6,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Joseph',
      id: 7,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Timothy',
      id: 8,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Angela',
      id: 9,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 10,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 11,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 12,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 13,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 14,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 15,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 16,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 17,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 18,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 19,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 20,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 21,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 22,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 23,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 24,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 25,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 26,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 27,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 28,
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Ebuka',
      id: 29,
      profileImage: require('./assets/img/default_profile.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'Ebuka',
      lastName: 'Nwafor',
      location: 'Akure, NG',
      likes: 20980,
      comments: 1120,
      bookmarks: 400,
      shares: 253,
      id: 1,
      image: require('./assets/img/default_post.png'),
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Confidence',
      lastName: 'Nwafor',
      location: 'Akure, NG',
      likes: 4980,
      comments: 120,
      bookmarks: 70,
      shares: 53,
      id: 2,
      image: require('./assets/img/default_post.png'),
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Esther',
      lastName: 'Nwafor',
      location: 'Akure, NG',
      likes: 4980,
      comments: 120,
      bookmarks: 70,
      shares: 53,
      id: 3,
      image: require('./assets/img/default_post.png'),
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Victor',
      lastName: 'Nwafor',
      location: 'Akure, NG',
      likes: 4980,
      comments: 120,
      bookmarks: 70,
      shares: 53,
      id: 4,
      image: require('./assets/img/default_post.png'),
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Amarachi',
      lastName: 'Nwafor',
      location: 'Akure, NG',
      likes: 4980,
      comments: 120,
      bookmarks: 70,
      shares: 53,
      id: 5,
      image: require('./assets/img/default_post.png'),
      profileImage: require('./assets/img/default_profile.png'),
    },
    {
      firstName: 'Destiny',
      lastName: 'Nwafor',
      location: 'Akure, NG',
      likes: 4980,
      comments: 120,
      bookmarks: 70,
      shares: 53,
      id: 6,
      image: require('./assets/img/default_post.png'),
      profileImage: require('./assets/img/default_profile.png'),
    },
    // {
    //   firstName: 'Oluchi',
    //   lastName: 'Nwafor',
    //   location: 'Abuja, NG',
    //   likes: 6983,
    //   comments: 100,
    //   bookmarks: 60,
    //   shares: 13,
    //   id: 7,
    //   image: require('./assets/img/default_post.png'),
    //   profileImage: require('./assets/img/default_profile.png'),
    // },
    // {
    //   firstName: 'Victoria',
    //   lastName: 'Johnson',
    //   location: 'Benin, NG',
    //   likes: 498,
    //   comments: 20,
    //   bookmarks: 30,
    //   shares: 10,
    //   id: 8,
    //   image: require('./assets/img/default_post.png'),
    //   profileImage: require('./assets/img/default_profile.png'),
    // },
    {
      firstName: 'Desmond',
      lastName: 'Oluwatobi',
      location: 'Lagos, NG',
      likes: 490,
      comments: 10,
      bookmarks: 7,
      shares: 3,
      id: 9,
      image: require('./assets/img/default_post.png'),
      profileImage: require('./assets/img/default_profile.png'),
    },
  ];

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const userStoriesPageSize = 3;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialPostData = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialPostData);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaProvider style={{ backgroundColor: '#fff', marginHorizontal: 14 }}>
      <SafeAreaView>
        <View style={globalStyle.userPostsConatiner}>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={globalStyle.header}>
                  <Title title={"Let's Explore"} />
                  <TouchableOpacity style={globalStyle.messageIcon}>
                    <FontAwesomeIcon
                      color={'#898dae'}
                      size={20}
                      icon={faEnvelope}
                    />
                    <View style={globalStyle.messageNumberContainer}>
                      <Text style={globalStyle.messageNumber}>2</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={globalStyle.userStoryContainer}>
                  <FlatList
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                      if (isLoadingUserStories) return;
                      setIsLoadingUserStories(true);
                      const contentToAppend = pagination(
                        userStories,
                        userStoriesCurrentPage + 1,
                        userStoriesPageSize,
                      );
                      if (contentToAppend.length > 0) {
                        setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                        setUserStoriesRenderedData(prev => [
                          ...prev,
                          ...contentToAppend,
                        ]);
                      }
                      setIsLoadingUserStories(false);
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={userStoriesRenderedData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                      <UserStory
                        firstName={item.firstName}
                        profileImage={item.profileImage}
                      />
                    )}
                  />
                </View>
              </>
            }
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingUserPosts) return;

              setIsLoadingUserPosts(true);

              const nextPage = userPostsCurrentPage + 1;

              const contentToAppend = pagination(
                userPosts,
                nextPage,
                userPostsPageSize,
              );

              if (contentToAppend.length > 0) {
                setUserPostsCurrentPage(nextPage);
                setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
              }

              setIsLoadingUserPosts(false);
            }}
            showsVerticalScrollIndicator={false}
            data={userPostsRenderedData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                shares={item.shares}
                bookmarks={item.bookmarks}
                profileImage={item.profileImage}
                location={item.location}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
