import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, ImageBackground } from 'react-native';

const HeartAnimation = () => {
  const heartPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateHeart();

    return () => {
      heartPosition.removeAllListeners();
    };
  }, [heartPosition]);

  const animateHeart = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(heartPosition, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(heartPosition, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const heartStyle = {
    transform: [
      {
        translateY: heartPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [-30, 300],
        }),
      },
    ],
  };

  return (
    <ImageBackground
    source={require('./src/image/love.png')} // Replace with the path to your image
    style={styles.background}
  >
     <View style={styles.container}>
      <Animated.Text style={[styles.heart, heartStyle]}>❤️</Animated.Text>
      <Text style={styles.message}>❤️Maha Batool❤️</Text>
      <Text style={styles.message}>❤️Happy Valentine's Day❤️</Text>
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  heart: {
    fontSize: 100,
    color: 'red',
  },
  message: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color:"#fff"
  },
});

export default HeartAnimation;
