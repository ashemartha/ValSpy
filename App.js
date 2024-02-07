import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

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
  /*const user={
    username:'ashemartha',
    level:52
  };
  return(
    <SafeAreaView style={styles.container}>
      <Text>Username: {user.username}</Text>
      <Text>Level: {user.level}</Text>
    </SafeAreaView>
  );*/
  return(
    <View style={styles.profileContainer} >
      <View style={styles.balanceContainer}>
          <Text>WWW</Text>         
      </View>
      <View style={styles.photoContainer}>

      </View>
    </View>
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
    
  },
  balanceContainer: {
    backgroundColor:'gray',
    marginTop:30,
    width:120,
    borderStyle:'solid',
    borderRadius:20,
    marginLeft:190,
  },
  photoContainer: {
    backgroundColor:'gray',
    alignItems:'center',
    textAlign:'center',
  }

});
