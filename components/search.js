import { StyleSheet,
    Text,
    TextInput,
    View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function Search() {
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

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});