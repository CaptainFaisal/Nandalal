import React from 'react'
import { Text } from 'react-native'
// import { collection, doc } from 'firebase/firestore';
import auth from '@react-native-firebase/auth';
const user = auth().currentUser;
const Home = () => <Text style={{fontSize:50, color: '#000'}}>Home - {user?.email}</Text>

export default Home