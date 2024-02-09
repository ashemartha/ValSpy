import { StyleSheet,
    Text,
    View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  
    return(
      <SafeAreaView style={styles.container}>
        <Text>Home</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});