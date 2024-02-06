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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
