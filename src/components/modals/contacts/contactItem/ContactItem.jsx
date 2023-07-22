import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './style';

const ContactItem = () => {
  return (
    <>
      {/* Contacts */}
      <TouchableOpacity style={styles.contactContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.image}
              source={{
                uri: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                priority: FastImage.priority.high,
              }}
            />
          </View>
          <View style={styles.usernameAndBio}>
            <Text style={styles.username}>John Doe</Text>
            <Text style={styles.bio}>I am software developer</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.image}
              source={{
                uri: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                priority: FastImage.priority.high,
              }}
            />
          </View>
          <View style={styles.usernameAndBio}>
            <Text style={styles.username}>John Doe</Text>
            <Text style={styles.bio}>I am software developer</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.image}
              source={{
                uri: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                priority: FastImage.priority.high,
              }}
            />
          </View>
          <View style={styles.usernameAndBio}>
            <Text style={styles.username}>John Doe</Text>
            <Text style={styles.bio}>I am software developer</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ContactItem;
