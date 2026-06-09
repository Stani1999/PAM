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

export default function DetailsScreen({ route }: DetailsScreenProps) { // <III.5.2./>
  const { 
    eventId, // <III.6.2./> title, -> eventId, title, 
    title, 
    description
    , location      // <IV.1.3./>
    , time          // <IV.3.5./>
    , date          // <V.2.6./>
    , category      // <V.3.5./> 
  } = route.params; 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.eventId}>Event ID: {eventId}{/* III.6.2. */}</Text>
      <Text style={styles.category}>{category}{/* V.3.5./> */}</Text>
      <Text style={styles.description}>{description}{/* IV.1.3./ */}</Text>
      <Text style={styles.location}>{location}{/* IV.1.3./ */}</Text>
      <Text style={styles.time}>Time: {time}{/* IV.3.5./ */}</Text>
      <Text style={styles.date}>Date: {date}{/* V.2.6./ */}</Text>
    </View>
  );
}