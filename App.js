import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React  from 'react';
import {  Animated, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

function History() {
  return(
    <View>
      <Text> History View </Text>
    </View>
  )
}

function Search() {
  /*const [SearchQuery,setSearchQuery]=useState('');
  const handleSearch=(text)=>{
    console.log(text);
    setSearchQuery(text);
  }
  return(
    <SafeAreaView style={styles.container}>
      <TextInput placeholder='Search' value={SearchQuery} onChangeText={handleSearch} autoFocus={true}/>
    </SafeAreaView>
  )*/
  const value = useState(new Animated.VlaueXY({x: 0,y: 0}))[0]
  function moveBall(){
    
  }
  return(
    <View>
      <View>
        <View style={{
          width : 100,
          height: 100,
          borderRadius : 100 / 2,
          backgroundColor: 'blue', 
        }} />
      </View>
      <TouchableOpacity onPress={moveBall}>
        <Text>
          Hey click me !
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function Profile() {
  return(
    <ScrollView contentContainerStyle={styles.profileContainer} >
      <View style={styles.balanceContainer}>
          <View style={styles.wallet}>
            <Icon style={styles.icon} name="wallet" ></Icon>
          </View>
          <Text>balance</Text>     
      </View>
      <View style={styles.photoContainer}>
        <Text>photo</Text>
      </View>
      <Text>username#id</Text>
      <Text style={styles.accountLabel}>ACCOUNT</Text>
      <View style={styles.stickyStat}>
        <View style={[styles.statContainer, {width: 260 }]}>
          <Text>RANK</Text>
        </View>
        <View style={[styles.statContainer, {width: 200 }]}>
          <Text>LEVEL</Text>
        </View>
        <View style={[styles.statContainer, {width: 140 }]}>
          <Text>TOTAL SPENT</Text>
        </View>
      </View>
      <View style={styles.favouriteAgent}>
          <Text>Favourite Agent</Text>
      </View>
    </ScrollView>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Profile" component={Profile}  />
          <Tab.Screen name="Search" component={Search}  />
          <Tab.Screen name="History" component={History}  />
        </Tab.Navigator> 
    </NavigationContainer>
    </SafeAreaProvider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin:20,
    borderStyle:'solid',
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  icon: {
    color: '#4C4C4C',
    fontSize: 17,
  },
  wallet:{
    color: '#4C4C4C',
    fontSize: 17,
    marginRight:80,
    marginTop:20, 
  },
  balanceContainer: {
    backgroundColor:'#BABABA',
    marginTop:30,
    width:120,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderStyle:'solid',
    borderRadius:20,
    marginLeft:190,
  },
  photoContainer: {
    backgroundColor:'#BABABA',
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    width:120,
    height:120,
    borderRadius: 60,
    marginTop:30,
  },
  stickyStat: {
    position:'sticky',
    bottom:0,
    alignSelf: 'flex-start',
  },
  statContainer: {
    backgroundColor:'#BABABA',
    width:120,
    borderStyle:'solid',
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    marginTop:30,
    height:40,
    justifyContent:'center',
    alignItems:'center',
  },
  accountLabel: {
    marginTop:20,
    fontSize:20,
  },
  favouriteAgent: {
    backgroundColor:'#BABABA',
    width:260,
    height:120,
    justifyContent:'center',
    alignItems:'center',
    borderStyle:'solid',
    borderRadius:20,
    marginTop:30,
  }
});
