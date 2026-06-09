// Lab II.1.2.
import { Pressable, Text } from "react-native";                                     // <IV.1.1./> View -> Pressable
import { styles } from "@/styles/ListItemStyles";

type ListItemProps = {
    // isHighlighted: boolean; <VI.1.1./> // <II.2.3./>
    title: string;
    time: string; // <V.3.5./>
    description: string;
    location: string; // <II.2.1./>
    category: string; // <V.3.4./>
    date: string; // <V.2.5./>
    onPress: () => void; // <IV.1.1./>

};

export default function ListItem({ title, description,
     time
     , location // <II.2.1./>
     //, isHighlighted // <II.2.3./>
     , date // <V.2.5./>
     , category // <V.3.4./>
     , onPress 
    }: ListItemProps) {
    return (
        <Pressable onPress={onPress}                                                // <IV.1.1./>
        style={
            ({ pressed, hovered }: { pressed: boolean; hovered?: boolean }) => // <VI.1.2./>
            [styles.container,
                category === "Workshop" && styles.workshopContainer, // <VI.2.4./>
                (pressed || hovered)            // <VI.1.2./>
                && styles.highlightedContainer // <II.2.3./>
            ]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.time}>Time: {time}{/* <V.3.5./> */}</Text>
            <Text style={styles.category}>Category: {category}{/* <V.3.4./> */}</Text>
            <Text style={styles.description}>Description: {description}{/*<IV.1.1./>*/}</Text> 
            <Text style={styles.location}>Location: {location}{/*<II.2.1./>*/}</Text>
            <Text style={styles.date}>Date: {date}{/* <V.2.5./> */}</Text>
        </Pressable>                                                                // <IV.1.1./>
    );
}