// Lab II.1.2.
import { Pressable, Text } from "react-native";                                     // <IV.1.1./> View -> Pressable
import { styles } from "@/styles/ListItemStyles";

type ListItemProps = {
    isHighlighted: boolean; // <II.2.3./>
    title: string;
    description: string;
    location: string; // <II.2.1./>
    onPress: () => void; // <IV.1.1./>

};

export default function ListItem({ title, description,
     location // <II.2.1./>
     , isHighlighted // <II.2.3./>
     , onPress
    }: ListItemProps) {
    return (
        <Pressable onPress={onPress} style={[styles.container,                      // <IV.1.1./> View -> Pressable onPress={onPress}
        isHighlighted && styles.highlightedContainer // <II.2.3./>
        ]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text> {/*<IV.1.1./>*/} 
            <Text style={styles.location}>{location}</Text> {/*<II.2.1./>*/}
        </Pressable>                                                                // View -> Pressable
    );
}