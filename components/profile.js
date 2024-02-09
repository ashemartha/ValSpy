import { StyleSheet,
    Text,
    View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
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

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});