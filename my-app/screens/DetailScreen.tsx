// Lab III.2.3.
// <III.5.2.>
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/Navigation";
// </III.5.2.>
import { View, Text } from "react-native";
import { styles } from "../styles/DetailScreenStyles";

// <III.5.2.>
type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type DetailsScreenProps = {
  route: DetailsScreenRouteProp;
};
// </III.5.2.>

export default function DetailsScreen({ route }: DetailsScreenProps) { // <III.5.2./> any -> { route: DetailsScreenRouteProp }
  const { eventId, title, description } = route.params; // <III.6.2./> title, -> eventId, title,

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.eventId}>Event ID: {eventId}</Text> {/* III.6.2. */}
      <Text>{description}</Text>
    </View>
  );
}