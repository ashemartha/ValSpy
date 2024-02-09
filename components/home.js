import { StyleSheet,
    Text,
    View,
    ScrollView,
    Image, 
    TouchableOpacity} from 'react-native';

import { getAgents } from '../services/standardRequestService';
import { useEffect, useState } from 'react';

export default function Home() {

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents().then(setAgents).catch(console.error);
  }, []);
  
    return(
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer} alwaysBounceVertical={true}>
            <Text>Agents</Text>
            <View style={styles.agentsContainer}>
            {agents.filter(agent => agent.isPlayableCharacter).map((agent) => (
              <TouchableOpacity key={agent.uuid} style={styles.agent}>
                <Image source={{ uri: agent.displayIcon }} style={{width: 50, height: 50}} />
                <Text style={{marginTop: 8}}>{agent.displayName}</Text>
              </TouchableOpacity>
            ))}
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
      width: 100,
      height: 100,
      margin: 8,
      padding: 10,
      backgroundColor: 'lightgrey',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }
});