import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import AddStory from './AddStory';
import StoryItem from './StoryItem';

const Stories = () => {
  return (
    <ScrollView>
      <AddStory />
      <StoryItem
        username="Jake Bull"
        picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        time="3 hours ago"
        Stories={[
          {
            time: '3 hours ago',
            url: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
          {
            time: '3 hours ago',
            url: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
          {
            time: '3 hours ago',
            url: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
        ]}
      />
      <StoryItem
        username="Jake Murphy"
        picture="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        time="3 hours ago"
        Stories={[
          {
            time: '3 hours ago',
            url: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
          {
            time: '3 hours ago',
            url: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
          {
            time: '3 hours ago',
            url: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
        ]}
      />
      <StoryItem
        username="Moriah Mary"
        picture="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        time="3 hours ago"
        Stories={[
          {
            time: '3 hours ago',
            url: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
          {
            time: '3 hours ago',
            url: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
          {
            time: '3 hours ago',
            url: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
        ]}
      />
    </ScrollView>
  );
};

export default Stories;
