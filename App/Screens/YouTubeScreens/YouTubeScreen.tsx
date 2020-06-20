import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './YouTubeScreenStyle';
import YouTube from 'react-native-youtube';
import axios from 'axios';
import {Colors} from '@themes';

export interface Video {
  description: string;
  embeddedUrl: string;
  id: string;
  imageUrl: string;
  name: string;
}
export const YouTubeScreen: React.FunctionComponent = () => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('');
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
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
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {backgroundColor: index % 2 ? Colors.Border : Colors.White},
        ]}
        onPress={() => setVideoId(item.embeddedUrl)}>
        <Image
          source={{uri: item.imageUrl}}
          style={[
            styles.itemImage,
            {
              borderWidth: item.embeddedUrl === videoId ? 5 : 0,
              borderColor: Colors.Blue,
            },
          ]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
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
    </View>
  );
};
