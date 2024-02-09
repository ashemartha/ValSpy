import { ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View } from 'react-native';

import { useState } from 'react';

export default function Search() {
    const [SearchQuery,setSearchQuery]=useState('');
    const handleSearch=(text)=>{
      console.log(text);
      setSearchQuery(text);
    }
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput placeholder='Search' value={SearchQuery} onChangeText={handleSearch} autoFocus={true}/>
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});