import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
  View
} from 'react-native';

const Register1 = () => (
  <SafeAreaView style={styles.background}>
    <Text style={styles.title}>Register</Text>
    <Text style={styles.subtitle}> bvg</Text>
    <TextInput
      style={styles.input}
      placeholder="Username"
      placeholderTextColor={'#000'}
      autoComplete="username"
    />
    <Text style={styles.subtitle}>Gb AvB wW (cwiPqcÎ bs)</Text>
    <TextInput
      style={styles.input}
      placeholder="NID"
      inputMode="numeric"
      placeholderTextColor={'#000'}
    />
    <Text style={styles.subtitle}> Rb¥ ZvwiL</Text>
    <View style={styles.dobContainer}>
      <TextInput
        style={styles.dobItem}
        placeholder="Day"
        inputMode="decimal"
        placeholderTextColor={'#000'}
      />
      <TextInput
        style={{...styles.dobItem, marginRight: 10, marginLeft: 10}}
        placeholder="Month"
        inputMode="numeric"
        placeholderTextColor={'#000'}
      />
      <TextInput
        style={styles.dobItem}
        placeholder="Year"
        inputMode="numeric"
        placeholderTextColor={'#000'}
      />
    </View>
    <Text style={styles.subtitle}>†gvevBj bs</Text>
    <TextInput
      style={styles.input}
      placeholder="Phone Number"
      inputMode="numeric"
      placeholderTextColor={'#000'}
    />
    <Text style={styles.subtitle}>widv‡iÝ AvBwW</Text>
    <TextInput
      style={styles.input}
      placeholder="Reference Number"
      inputMode="numeric"
      placeholderTextColor={'#000'}
    />
    <Pressable
      android_ripple={{
        color: 'rgb(200,200,200)',
        radius: 200,
        foreground: true,
      }}
      style={styles.login}>
      <Text style={styles.loginText}>Next</Text>
    </Pressable>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dobContainer:{
    flexDirection: 'row',
    width: "80%",
  },
  dobItem:{
    flex:1,
    borderColor: '#000',
    borderWidth: 2,
    height: 52,
    marginBottom: 10
  },
  title: {
    fontSize: 36,
    color: 'black',
  },
  input: {
    borderColor: '#000',
    color: '#000',
    marginBottom: 10,
    height: 52,
    width: '80%',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  login: {
    backgroundColor: '#000',
    height: 52,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 6,
  },
  loginText: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.52,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'subha-swarna',
    color: 'black',
    alignSelf: 'flex-start',
    paddingLeft: '10%',
  },
});
export default Register1;
