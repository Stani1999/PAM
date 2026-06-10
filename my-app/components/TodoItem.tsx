import { View, Text } from "react-native";
import { styles } from "../styles/TodoItemStyles";

type TodoItemProps = {
  title: string;
  status: boolean;
};

export default function TodoItem({ title, status }: TodoItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.status, status ? styles.completed : styles.pending]}>
        Status: {status ? "Completed" : "Pending"}
      </Text>
    </View>
  );
}