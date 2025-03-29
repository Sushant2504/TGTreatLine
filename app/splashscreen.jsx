import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { 
  FadeIn, 
  FadeOut, 
  SlideInDown,
  SlideOutUp 
} from 'react-native-reanimated';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Replace 'Home' with your target screen name
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View 
      style={styles.container}
      entering={FadeIn.duration(800)}
      exiting={FadeOut.duration(500)}
    >
      <Animated.View 
        style={styles.content}
        entering={SlideInDown.springify().damping(15)}
        exiting={SlideOutUp.duration(500)}
      >
        <Image 
          source={require('./assets/images/treatline.png')} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>My Awesome App</Text> {/* Replace with your app name */}
      </Animated.View>
    </Animated.View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Change to your preferred background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.5, // 50% of screen width
    height: Dimensions.get('window').width * 0.5, // Keep it square
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Change to your preferred text color
    marginTop: 20,
  },
});



export default SplashScreen;