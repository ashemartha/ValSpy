import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './components/home';
import Search from './components/search';
import Profile from './components/profile';
import History from './components/history';

export default function App() {
  
  const logo = require('./assets/logo.png');
  const [selectedTab, setSelectedTab] = useState('Home');

  let displayedComponent;
  if (selectedTab === 'Home') {
    displayedComponent = <Home />;
  } else if (selectedTab === 'History') {
    displayedComponent = <History />;
  } else if (selectedTab === 'Profile') {
    displayedComponent = <Profile />;
  } else if (selectedTab === 'Search') {
    displayedComponent = <Search />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Image source={logo} style ={{ width: 98, height: 30 }}/>
        <View>
          <View style={styles.topRightNav}>
            <TouchableOpacity onPress={() => setSelectedTab('Search')}>
              <Icon style={styles.icon} name="search" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTab('Profile')}>
              <Icon style={styles.icon} name="account-circle" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.body}>
      {displayedComponent}
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('Home')}> 
          <Icon style={styles.icon} name="home" size={34}/>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('History')}> 
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
