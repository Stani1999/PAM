// Lab III.3.1.
import { RootStackParamList } from "../../types/Navigation"; // <III.4.2/>
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import DetailsScreen from "../../screens/DetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>(); // <III.4.2/> () -> <RootStackParamList>()

export default function App() {
  
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <III.6.4.> */}
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
        {/* <III.6.4.> */}
      </Stack.Navigator>
  );
}

// <III.3.1.>
// // Lab I.7.1.
// import { Footer } from '@/components/Footer';  // <I.10.3./>
// import { Header } from '@/components/Header';  // <I.9.3./>
// import { styles } from '@/styles/indexStyles';
// import ListItem from '@/components/ListItem';  // <II.1.3./>
// // <I.8.1.>
// import { // StyleSheet, < I.10.1./>
//   Text, View, Button,
//    ScrollView // II.1.3.
// } from 'react-native';
// import { useState } from 'react';
// // </I.8.1.>


// export default function App() {
//   const [count, setCount] = useState<number>(0);
//   // <II.1.3.>
//   const events = [
//     { id: 1, title: "Lecture: React", description: "10:00", 
//       location: "A1", // <II.1.2./>
//        isHighlighted: true }, //<II.1.3./>
//     { id: 2, title: "Workshop: AI", description: "12:00", 
//       location: "B2", // <II.1.2./>
//        isHighlighted: false }, //<II.1.3./>
//     { id: 3, title: "Meeting: Coding Club", description: "15:00", 
//       location: // <II.1.2./>
//       "C3", isHighlighted: true }, // <II.1.3./>
//     // <II.1.4.>
//     { id: 4, title: "Lecture: React", description: "10:00", location: "A1", isHighlighted: true },
//     { id: 5, title: "Workshop: AI", description: "12:00", location: "B2", isHighlighted: false },
//     { id: 6, title: "Meeting: Coding Club", description: "15:00", location: "C3", isHighlighted: true },
//     { id: 7, title: "Seminar: Mobile Dev", description: "17:00", location: "D4", isHighlighted: false },
//     { id: 8, title: "Hackathon Kickoff", description: "19:00", location: "E5", isHighlighted: true },
//     // </II.1.4.>
//   ];
//   // </II.1.3.>
//   return (
//     <View style={styles.container}>
//       {/* <II.1.1.> <Header/> {/* <I.9.3./> 
//       <Text style={styles.title}>Smart Campus</Text> */}
//       <Header title = "Smart Campus"/>
//       {/* </II.1.1.> */}
//       <Text style={styles.subtitle}>My first mobile application</Text>
//       {/* <I.8.1.> */}
//       <Text style={styles.title}>Counter:</Text>
//       <Text style={styles.counter}>{count}</Text>
//       <Button title="Increase" onPress={() => setCount(count + 1)} />
//       {/* </I.8.1.> */}
//       <Button title="Decrease" onPress={() => setCount(count - 1)} /> {/* <I.10.2./> */}
//       {/* <II.1.3.> */}
//       <ScrollView>
//         {events.map(event => (
//           <ListItem 
//             key={event.id} 
//             title={event.title} 
//             description={event.description} 
//             location={event.location}
//             isHighlighted={event.isHighlighted}
//              />
//         ))}
//       </ScrollView>
//       {/* </II.1.3.> */}
//       <Footer /> {/* <I.10.3./> */}
//     </View>
//   );
// }
// </III.3.1.>

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