// Lab I.7.1.
import { styles } from '@/styles/indexStyles';
import { StatusBar } from 'expo-status-bar';
// <I.8.1.>
import { // StyleSheet, < I.10.1./>
  Text, View, Button } from 'react-native';
import { useState } from 'react';
// </I.8.1.>
import { Header } from '@/components/Header';  // <I.9.3./>
import { Footer } from '@/components/footer';  // <I.10.3./>

export default function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Header/> {/* <I.9.3./> */}
      <Text style={styles.title}>Smart Campus</Text> 
      <Text style={styles.subtitle}>My first mobile application</Text>
      {/* <I.8.1.> */}
      <Text style={styles.title}>Counter:</Text>
      <Text style={styles.counter}>{count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      {/* </I.8.1.> */}
      <Button title="Decrease" onPress={() => setCount(count - 1)} /> {/* <I.10.2./> */}
      <StatusBar style="auto" />
      <Footer /> {/* <I.10.3./> */}
    </View>
  );
}

// <I.10.1.>
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 16,
//     marginTop: 10,
//   },
//   // <I.8.1.>
//   counter: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   // </I.8.1.>
// </I.10.1.>
//});