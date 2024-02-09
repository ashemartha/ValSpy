import { StyleSheet,
    Text,
    View,
    ScrollView,
    Image, 
    TouchableOpacity} from 'react-native';

export default function Home() {
  
    return(
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer} alwaysBounceVertical={true}>
            <Text>Agents</Text>
            <View style={styles.agentsContainer}>
              <TouchableOpacity style={styles.agent}>
                <Image source={require('../assets/favicon.png')} style={{width: 50, height: 50}} />
                <Text>agent-name</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.agent}>
                <Image source={require('../assets/favicon.png')} style={{width: 50, height: 50}} />
                <Text>agent-name</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.agent}>
                <Image source={require('../assets/favicon.png')} style={{width: 50, height: 50}} />
                <Text>agent-name</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    agentsContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    agent: {
      margin: 10,
      padding: 10,
      backgroundColor: 'lightgrey',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }
});