import { StyleSheet,
    Text,
    View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  
    return(
      <SafeAreaView style={styles.container}>
        <View>
          <ScrollView>
            <Text>Home</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});