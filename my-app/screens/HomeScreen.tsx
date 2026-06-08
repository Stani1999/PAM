// Lab III.2.2.
import ListItem from "../components/ListItem";              // <IV.1.2.> Add import for ListItem
// <III.5.1.>
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Navigation";
// </III.5.1.>
import { FlatList, View, Text, Button } from "react-native"; // <IV.1.2.> Add import for FlatList
import { styles } from "../styles/HomeScreenStyles";

// <III.5.1.>
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};
// </III.5.1.>

// <IV.1.2.>
type EventItem = {
  eventId: number;
  title: string;
  description: string;
  location: string;
  isHighlighted: boolean;
  time: string; // <IV.3.2.>
};
// </IV.1.2.>

export default function HomeScreen({ navigation }: HomeScreenProps) { // <III.5.1./> any -> HomeScreenProps
  
// <IV.1.2.>
  const events: EventItem[] = [
    // <VI.3.2.> Add time field to all events
    { eventId: 1, title: "Lecture: React", description: "10:00", location: "A1", isHighlighted: true, time: "10:00" },
    { eventId: 2, title: "Workshop: AI", description: "12:00", location: "B2", isHighlighted: false, time: "12:00" },
    { eventId: 3, title: "Meeting: Coding Club", description: "15:00", location: "C3", isHighlighted: true, time: "15:00" },
    { eventId: 4, title: "Seminar: Mobile Dev", description: "17:00", location: "D4", isHighlighted: false, time: "17:00" },
    { eventId: 5, title: "Hackathon Kickoff", description: "19:00", location: "E5", isHighlighted: true, time: "19:00" },
    // <IV.2.4.> 
    { eventId: 6, title: "Lab: Database Design", description: "09:00", location: "F6", isHighlighted: false, time: "09:00" },
    { eventId: 7, title: "Lecture: TypeScript", description: "11:00", location: "G7", isHighlighted: true, time: "11:00" },
    { eventId: 8, title: "Workshop: UI/UX", description: "13:00", location: "H8", isHighlighted: false, time: "13:00" },
    { eventId: 9, title: "Networking Session", description: "15:30", location: "I9", isHighlighted: true, time: "15:30" },
    { eventId: 10, title: "Seminar: Cloud Services", description: "17:30", location: "J0", isHighlighted: false, time: "17:30" },
    { eventId: 11, title: "Code Review Panel", description: "19:00", location: "K1", isHighlighted: true, time: "19:00" },
    { eventId: 12, title: "Workshop: Testing", description: "09:30", location: "L2", isHighlighted: false, time: "09:30" },
    { eventId: 13, title: "Closing Ceremony", description: "20:00", location: "Main Hall", isHighlighted: true, time: "20:00" },
    { eventId: 14, title: "After Party", description: "22:00", location: "Village", isHighlighted: true, time: "22:00" },
    // </IV.2.4.>
    // <VI.3.2.>
  ];
  // </IV.1.2.>

  return (
    // <IV.1.2.>
    <View style={styles.container}>
      <Text style={styles.header}>Wydarzenia</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => item.eventId.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              description={item.description}
              location={item.location}
              isHighlighted={item.isHighlighted}
              onPress={() =>
                navigation.navigate("Details", {
                  eventId: item.eventId,
                  title: item.title,
                  description: item.description,
                  location: item.location,
                  time: item.time, // <IV.3.2./>
                })
              }
            />
          )}
        />
    </View> 
    // <View style={styles.container}>
    //   <Text style={styles.title}>Events List</Text>

    //   <Button
    //     title="Go to details"
    //     onPress={() =>
    //       navigation.navigate("Details", {
    //         title: "React Lecture",
    //         eventId: 1, // <III.6.2./>
    //         description: "Room GM-46, 9:45",
    //       })
    //     }
    //   />

    //   {/* <III.6.2> */}
    //   <Button
    //     title="Go to React Lab"
    //     onPress={() =>
    //       navigation.navigate("Details", {
    //         eventId: 2,
    //         title: "React Lab",
    //         description: "Room 101, 11:30",
    //       })
    //     }
    //   />
    //   {/* <III.6.2> */}
    //       <Button
    //     title="Go to Lecture: React"
    //     onPress={() =>
    //       navigation.navigate("Details", {
    //         eventId: 3,
    //         title: "Lecture: React",
    //         description: "10:00, A1",
    //       })
    //     }
    //   />

    //   {/* <III.6.5> */}
    //   <Button
    //     title="Go to Workshop: AI"
    //     onPress={() =>
    //       navigation.navigate("Details", {
    //         eventId: 4,
    //         title: "Workshop: AI",
    //         description: "12:00, B2",
    //       })
    //     }
    //   />

    //   <Button
    //     title="Go to Meeting: Coding Club"
    //     onPress={() =>
    //       navigation.navigate("Details", {
    //         eventId: 5,
    //         title: "Meeting: Coding Club",
    //         description: "15:00, C3",
    //       })
    //     }
    //   />

    //   <Button
    //     title="Go to Seminar: Mobile Dev"
    //     onPress={() =>
    //       navigation.navigate("Details", {
    //         eventId: 6,
    //         title: "Seminar: Mobile Dev",
    //         description: "17:00, D4",
    //       })
    //     }
    //   />

    //   <Button
    //     title="Go to Hackathon Kickoff"
    //     onPress={() =>
    //       navigation.navigate("Details", {
    //         eventId: 7,
    //         title: "Hackathon Kickoff",
    //         description: "19:00, E5",
    //       })
    //     }
    //   />
    //   {/* </III.6.5> */}
    // </View>
    // <IV.1.2.> 
  );
}