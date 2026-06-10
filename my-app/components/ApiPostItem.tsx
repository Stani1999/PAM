// Lab VII.1.3.
import { Pressable, Text} from "react-native";
import { styles } from "../styles/ApiPostItemStyles";

type ApiPostItemProps = {
  title: string;
  id: number; // <VII.2.2./>
  body: string;
  onPress: () => void;
};

export default function ApiPostItem({
  title,
  id,// <VII.2.2./>
  body,
  onPress,
}: ApiPostItemProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.id}>Post ID: {id}{/* <VII.2.2./> */}</Text> 
      <Text style={styles.body} numberOfLines={2}>
        {body}
      </Text>
    </Pressable>
  );
}