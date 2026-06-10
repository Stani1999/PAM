// Lab VIII.2.3.
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Todo } from "../types/Todo";
import TodoItem from "../components/TodoItem";
import { useFetch } from "../hooks/useFetch";
import { styles } from "../styles/TodosScreenStyles";

export default function TodosScreen() {
  const {
    data: todos,
    isLoading,
    error,
  } = useFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos");

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text style={styles.infoText}>Loading todos...</Text>
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

  // <VIII.3.2.>
  if (!isLoading && !error && todos?.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No todos found.</Text>
      </View>
    );
  }
  // </VIII.3.2.>

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>

      <FlatList
        data={todos ? todos.slice(0, 20) : []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            title={item.title}
            status={item.completed}
          />
        )}
      />
    </View>
  );
}