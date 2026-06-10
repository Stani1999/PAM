// Lab VII.1.5.
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/Navigation";
import { styles } from "../styles/ApiPostDetailsScreenStyles";

type ApiPostDetailsRouteProp = RouteProp<RootStackParamList, "ApiPostDetails">;

type ApiPostDetailsScreenProps = { route: ApiPostDetailsRouteProp };

export default function ApiPostDetailsScreen({
  route,
}: ApiPostDetailsScreenProps) {
  const { id, title, body } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.meta}>Post ID: {id}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}