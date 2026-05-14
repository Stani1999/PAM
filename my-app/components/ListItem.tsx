// Lab II.1.2.
import { View, Text } from "react-native";
import { styles } from "@/styles/ListItemStyles";

type ListItemProps = {
    isHighlighted: boolean; // <II.2.3./>
    title: string;
    description: string;
    location: string; // <II.2.1./>
};

export default function ListItem({ title, description,
     location // <II.2.1./>
     , isHighlighted // <II.2.3./>
    }: ListItemProps) {
    return (
        <View style={[styles.container, 
        isHighlighted && styles.highlightedContainer // <II.2.3./>
        ]}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <Text>{location}</Text> {/*<II.2.1./>*/}
        </View>
    );
}