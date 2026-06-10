// Lab VIII.1.6.
import { UsersScreenProps } from "../types/Navigation"; // <IX.3.1./>
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { User } from "../types/User";
import UserItem from "../components/UserItem";
import { useFetch } from "../hooks/useFetch";
import { styles } from "../styles/UsersScreenStyles";

export default function UsersScreen({ navigation }: UsersScreenProps) { // <IX.3.1./>
  const {
    data: users,
    isLoading,
    error,
  } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text style={styles.infoText}>Loading users...</Text>
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

  // <VIII.3.1.>
  if (!isLoading && !error && users?.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No data found.</Text>
      </View>
    );
  }
  // </VIII.3.1.>

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users</Text>

      <FlatList
        data={users ?? []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UserItem
            name={item.name}
            username={item.username}
            email={item.email}
            onPress={() => navigation.navigate("UserDetails", {id: item.id, })} // </IX.3.4.>
          />
        )}
      />
    </View>
  );
}