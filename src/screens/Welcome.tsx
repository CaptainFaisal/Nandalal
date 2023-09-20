import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import auth from '@react-native-firebase/auth';

type WelcomeProps = {navigation: {navigate: Function}};

const Welcome = ({navigation: {navigate}}: WelcomeProps) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.background}>
        <View style={{flex: 1}} />
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
        <Image
          style={styles.title}
          source={require('../assets/images/title.png')}
        />
        <Text style={styles.text}>Time = Money</Text>
        <Text style={styles.text}>Don't waste your time</Text>
        <View style={{flex: 1}} />
        <View style={styles.buttonContainer}>
          <Pressable
            android_ripple={{
              color: 'rgb(100,100,100)',
              radius: 100,
              foreground: true,
            }}
            onPress={() => navigate('Login')}>
            <View style={styles.loginButton}>
              <Text style={styles.text}>LOG IN</Text>
            </View>
          </Pressable>
          <Pressable
            android_ripple={{
              color: 'rgb(100,100,100)',
              radius: 100,
              foreground: true,
            }}
            onPress={() => navigate('Register1')}>
            <View style={styles.registerButton}>
              <Text style={styles.text}>REGISTER</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  loginButton: {
    width: 167,
    height: 52,
    backgroundColor: '#FFD600',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: '#000',
    borderWidth: 2,
  },
  logo: {
    width: 50,
    height: 50,
  },
  registerButton: {
    width: 167,
    height: 52,
    backgroundColor: '#A3A3A3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: '#000',
    borderWidth: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    transform: [{scale: 0.7}],
  },
});
export default Welcome;
