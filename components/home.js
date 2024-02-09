import { StyleSheet,
    Text,
    View,
    ScrollView,
    Image, 
    TouchableOpacity,
    LayoutAnimation,
    UIManager,
    Platform
  } from 'react-native';

import { getAgents } from '../services/standardRequestService';
import { getWeapons } from '../services/standardRequestService';

import { useEffect, useState } from 'react';


if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function CollapsibleContainer({ title, items, renderItem }) {
  const [flexGrow, setFlexGrow] = useState(0);

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFlexGrow(flexGrow === 0 ? 1 : 0);
  };

  return (
    <View style={[styles.container, {flexGrow}]}>
      <TouchableOpacity style={styles.labelContainer} onPress={handlePress}>
        <Text style={styles.label}>{title}</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContainer} alwaysBounceVertical={true}>
        <View style={styles.itemsContainer}>
          {items.map(renderItem)}
        </View>
      </ScrollView>
    </View>
  );
}

export default function Home() {

  const [agents, setAgents] = useState([]);
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    getAgents().then(setAgents).catch(console.error);
  }, []);

  useEffect(() => {
    getWeapons().then(setWeapons).catch(console.error);
  }, []);
  
    return(
      <ScrollView contentContainerStyle={styles.outterContainer}>
        <CollapsibleContainer
          title="Agents"
          items={agents.filter(agent => agent.isPlayableCharacter)}
          renderItem={agent => (
            <TouchableOpacity key={agent.uuid} style={styles.item}>
              <Image source={{ uri: agent.displayIcon }} style={{width: 50, height: 50}} />
              <Text style={{marginTop: 8}}>{agent.displayName}</Text>
            </TouchableOpacity>
          )}
        />
        <CollapsibleContainer
          title="Weapons"
          items={weapons}
          renderItem={weapon => (
            <TouchableOpacity key={weapon.uuid} style={[styles.item, {width: '100%', height: 200 }]}>
              <Image
              source={{ uri: weapon.displayIcon }}
              style={{width: '100%', height: 100}}
              resizeMode="contain"/>
              <Text style={{marginTop: 8}}>{weapon.displayName}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    outterContainer: {
      flex: 1,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      position: 'relative',
    },
    labelContainer: {
      backgroundColor: 'white',
      height: 80,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 80,
    },
    scrollContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    itemsContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
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