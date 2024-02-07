import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function History() {
  return(
    <View>
      <Text> History View </Text>
    </View>
  )
}

function Search() {
  const [SearchQuery,setSearchQuery]=useState('');
  const handleSearch=(text)=>{
    console.log(text);
    setSearchQuery(text);
  }
  return(
    <SafeAreaView style={styles.container}>
      <TextInput placeholder='Search' value={SearchQuery} onChangeText={handleSearch} autoFocus={true}/>
    </SafeAreaView>
  )
}

function Profile() {
  const user={
    username:'ashemartha',
    level:52
  };

  return(
    <SafeAreaView style={styles.container}>
      <Text>Username: {user.username}</Text>
      <Text>Level: {user.level}</Text>
    </SafeAreaView>
  );
}


export default function App() {

  const logo = require('./assets/logo.png');
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Image source={logo} style ={{ width: 98, height: 30 }}/>
        <View>
          <View style={styles.topRightNav}>
            <Icon style={styles.icon} name="search" size={24} />
            <Icon style={styles.icon} name="account-circle" size={24}/>
          </View>
        </View>
      </View>
      <View style={styles.body}>

      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity> 
          <Icon style={styles.icon} name="home" size={34}/>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}> 
          <Icon style={styles.icon} name="history" size={34}/>
          <Text>History</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topNav: {
    elevation: 10,
    height: 70,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  topRightNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 28,
  },
  icon: {
    color: '#364966',
  },
  body: {
    flex: 1,
    backgroundColor: '#f0f2f5'
  },
  bottomNav: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#E5E5E5',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
