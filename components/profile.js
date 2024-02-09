import { StyleSheet,
    Text,
    View,
    ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
    const user={
      username:'ashemartha',
      level:52
    };
  
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Username: {user.username}</Text>
        <Text>Level: {user.level}</Text>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});