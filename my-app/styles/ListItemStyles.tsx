// Lab II.1.2.
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // <II.2.3.>
    highlightedContainer: {
        backgroundColor: "#ffeb3b", // highlighted background color
    },
    // </II.2.3.>
    container: {
        marginHorizontal: 12,
        marginVertical: 6,
        padding: 15,
        margin: 10,
        backgroundColor: "#ffffff",
        borderRadius: 16,                       // <IV.2.5./> 8 -> 16
        elevation: 5,                           // <IV.2.5./> 3 -> 5
        // <IV.2.5.>
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        // </IV.2.5.>
    },
    title: {
        fontSize: 18,           // <IV.1.1./>
        fontWeight: "bold",
        marginBottom: 5,
    },
    // <II.2.1.>
    location: {
        fontSize: 12,
        color: "#888",
        marginTop: 4,
        fontStyle: "italic",
    },
    // </II.2.1.>
    
    // <IV.1.1.>
    description: {
        fontSize: 14,
        color: "#555",
    },
    // </IV.1.1.>
});