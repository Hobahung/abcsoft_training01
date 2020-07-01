import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './YouTubeScreenStyle';
import YouTube from 'react-native-youtube';
import axios from 'axios';
import {Colors} from '@themes';
import {ItemComponent, AvatarComponent} from '@components';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack/types';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {Screens} from '@config';
import {MainStackRoute} from 'App';

export interface YouTubeRouteParams {
  name: string;
}

type RoutePropCustom = RouteProp<MainStackRoute, Screens.YouTubeScreen>;

export interface YouTubeRouterParams {
  test: string;
}

export interface LoginScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: RoutePropCustom;
}

export interface Video {
  description: string;
  embeddedUrl: string;
  id: string;
  imageUrl: string;
  name: string;
}
export const YouTubeScreen: React.FunctionComponent<LoginScreenProps> = (
  props: LoginScreenProps,
) => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('');
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    console.log(props.route.params.name);
    axios({
      method: 'get',
      url: 'https://5eec5c4b5e298b0016b69a76.mockapi.io/abcsoft/video',
    })
      .then(response => {
        setVideos(response.data);
      })
      .catch(() => {
        // Goi API that bai
      });
  };
  const getYoutubeId = (embeddedUrl: string) => {
    return embeddedUrl ? embeddedUrl.split('?v=')[1] : embeddedUrl;
  };
  const renderVideoItem = (item: Video, index: number) => {
    return (
      <ItemComponent
        description={item.description}
        image={item.imageUrl}
        title={item.name}
        isActive={item.embeddedUrl === videoId}
        isHighLight={index % 2 === 0}
        onClick={() => setVideoId(item.embeddedUrl)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <YouTube videoId={getYoutubeId(videoId)} style={styles.video} />
      <FlatList
        data={videos}
        renderItem={({item, index}) => renderVideoItem(item, index)}
        showsVerticalScrollIndicator={false}
      />
      {/* <AvatarComponent image={''} name={'Vo Ba Hung'} /> */}
    </View>
  );
};
