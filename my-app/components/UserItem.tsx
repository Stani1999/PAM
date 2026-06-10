// Lab VIII.1.5.
import { Pressable, Text } from "react-native";
import { styles } from "../styles/UserItemStyles";

type UserItemProps = {
  name: string;
  email: string;
  username: string;
  onPress: () => void;
};

export default function UserItem({
  name,
  email,
  username,
  onPress,
}: UserItemProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>@{username}</Text>
      <Text style={styles.email}>{email}</Text>
    </Pressable>
  );
}