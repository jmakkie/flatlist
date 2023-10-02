import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, SafeAreaView, View} from 'react-native';
import DATA from './DATA';
import Row from './components/Row';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Row person={item}/>
        )}
        keyExtractor={item => item.id}
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    marginLeft: 10,
  },
});
