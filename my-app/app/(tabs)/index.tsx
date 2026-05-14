// Lab I.7.1.
import { StatusBar } from 'expo-status-bar';
// <I.8.1.>
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { Header } from '@/components/Header';  // <I.9.3./>

export default function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Smart Campus</Text> {/* <I.9.3./> */}
      <Text style={styles.subtitle}>My first mobile application</Text>
      {/* <I.9.3.> */}
      <Text style={styles.title}>Counter:</Text>
      <Text style={styles.counter}>{count}</Text>
      {/* </I.9.3.> */}
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <StatusBar style="auto" />
    </View>
// </I.8.1.>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
  // <I.8.1.>
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  // </I.8.1.>
});