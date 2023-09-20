import React, {useState} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const Login = ({
  navigation: {navigate},
}: {
  navigation: {navigate: Function};
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [emailInpErr, setEmailInpErr] = useState(false);
  const [pwdInpErr, setPwdInpErr] = useState(false);
  const handleLogin = () => {
    if (!email) setEmailInpErr(true);
    if (!password) setPwdInpErr(true);
    if (email && password) {
    setLoggingIn(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigate('Home');
          setLoggingIn(false);
          setErrorMsg('');
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              setErrorMsg('Your enter email is not a valid email address');
              break;
            case 'auth/invalid-login':
              setErrorMsg('Email or password is incorrect');
              break;
            case 'auth/too-many-requests':
              setErrorMsg('Too many login attempts. Please try again later');
              break;
          }
          console.log(error.code)
          setLoggingIn(false);
        });
    }
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
    emptyMsg: {
      color: 'red',
      alignSelf: 'flex-start',
      marginLeft: '10%',
    },
    inputPwd: {
      borderColor: pwdInpErr ? 'red' : '#000',
      borderWidth: 2,
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 52,
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
    pwdInpTxt: {
      color: '#000',
      flex: 1,
    },
    showBtn: {
      backgroundColor: 'rgb(200,200,200)',
      borderCorlor: '#000',
      height: '100%',
      flex: 1,
      maxWidth: 52,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 36,
      color: 'black',
    },
    emailInpTxt: {
      borderColor: emailInpErr ? 'red' : '#000',
      color: '#000',
      marginBottom: 10,
      height: 52,
      width: '80%',
      borderWidth: 2,
    },
  });
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>Login</Text>
      {emailInpErr && <Text style={styles.emptyMsg}>Email is required</Text>}
      <TextInput
        style={styles.emailInpTxt}
        placeholder="Email"
        autoComplete="email"
        onChangeText={email => {
          setEmail(email)
          setEmailInpErr(false)
        }}
        placeholderTextColor={'#000'}
      />
      {pwdInpErr && <Text style={styles.emptyMsg}>Password is required</Text>}
      <View style={styles.inputPwd}>
        <TextInput
          style={styles.pwdInpTxt}
          placeholder="Password"
          placeholderTextColor={'#000'}
          onChangeText={password => {
            setPassword(password)
            setPwdInpErr(false)
          }}
          secureTextEntry={!showPassword}
          autoCorrect={false}
        />
        <Pressable
          style={styles.showBtn}
          onPress={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} size={35} />
        </Pressable>
      </View>
      <Pressable
        android_ripple={{
          color: 'rgb(200,200,200)',
          radius: 200,
          foreground: true,
        }}
        onPress={() => handleLogin()}
        style={styles.login}>
        <Text style={styles.loginText}>
          {loggingIn ? 'Loging in...' : 'Log In'}
        </Text>
      </Pressable>
      {errorMsg && <Text style={{color: 'red'}}>{errorMsg}</Text>}
    </SafeAreaView>
  );
};
export default Login;
