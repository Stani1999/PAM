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
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.15)",
        // </IV.2.5.>
    },
    title: {
        fontSize: 18,           // <IV.1.1./>
        fontWeight: "bold",
        marginBottom: 5,
    },
    // <V.3.5.>
    time: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    // </V.3.5.>

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

    // <V.2.5.>
    date: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 4,
        color: "#444",
    },
    // </V.2.5.>

    // <V.3.4.>
    category: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#007BFF",
        textTransform: "uppercase",
        marginBottom: 4,
    },
    // </V.3.4.>

    // <VI.2.4.>
    workshopContainer: {
        backgroundColor: "rgba(135, 206, 235, 0.6)", 
    },
    // </VI.2.4.>
});