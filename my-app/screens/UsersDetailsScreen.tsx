// Lab IX.3.2.
import { View, Text, ActivityIndicator } from "react-native";
import { User } from "../types/User";
import { useFetch } from "../hooks/useFetch";
import { styles } from "../styles/UserDetailsScreenStyles";
import { UserDetailsScreenProps } from "../types/Navigation";

export default function UserDetailsScreen({ route }: UserDetailsScreenProps) {
  const { id } = route.params;

  const { data: user, isLoading, error } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text style={styles.infoText}>Loading user details...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.centered}>
        <Text style={styles.infoText}>User not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.phone}>Phone: {user.phone}</Text>
      <Text style={styles.website}>Website: {user.website}</Text>
    </View>
  );
}