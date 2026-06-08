// Lab III.2.2.
// <III.5.1.>
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Navigation";
// </III.5.1.>
import { View, Text, Button } from "react-native";
import { styles } from "../styles/HomeScreenStyles";

// <III.5.1.>
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};
// </III.5.1.>

export default function HomeScreen({ navigation }: HomeScreenProps) { // <III.5.1./> any -> HomeScreenProps
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events List</Text>

      <Button
        title="Go to details"
        onPress={() =>
          navigation.navigate("Details", {
            title: "React Lecture",
            eventId: 1, // <III.6.2./>
            description: "Room GM-46, 9:45",
          })
        }
      />

      {/* <III.6.2> */}
      <Button
        title="Go to React Lab"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 2,
            title: "React Lab",
            description: "Room 101, 11:30",
          })
        }
      />
      {/* <III.6.2> */}
          <Button
        title="Go to Lecture: React"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 3,
            title: "Lecture: React",
            description: "10:00, A1",
          })
        }
      />

      {/* <III.6.5> */}
      <Button
        title="Go to Workshop: AI"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 4,
            title: "Workshop: AI",
            description: "12:00, B2",
          })
        }
      />

      <Button
        title="Go to Meeting: Coding Club"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 5,
            title: "Meeting: Coding Club",
            description: "15:00, C3",
          })
        }
      />

      <Button
        title="Go to Seminar: Mobile Dev"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 6,
            title: "Seminar: Mobile Dev",
            description: "17:00, D4",
          })
        }
      />

      <Button
        title="Go to Hackathon Kickoff"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 7,
            title: "Hackathon Kickoff",
            description: "19:00, E5",
          })
        }
      />
      {/* </III.6.5> */}
    </View>
  );
}