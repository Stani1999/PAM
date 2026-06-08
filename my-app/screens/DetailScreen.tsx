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
  const { 
    eventId, // <III.6.2./> title, -> eventId, title, 
    title, 
    description,
    location,       // <IV.1.3./> Add , location
    time            // <IV.3.4./> Add , time
  } = route.params; 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.eventId}>Event ID: {eventId}</Text> {/* III.6.2. */}
      <Text style={styles.description}>{description}</Text>   {/* IV.1.3./ Add style={styles.description */}
      <Text style={styles.location}>{location}</Text>         {/* IV.1.3./ */}
      <Text style={styles.time}>Time: {time}</Text>           {/* IV.3.4./ */}
    </View>
  );
}