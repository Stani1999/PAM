// Lab III.2.3.
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // <III.6.2.>
  eventId: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  // </III.6.2.>
  container: {
    padding: 20,                          // <IV.1.3./>
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // <IV.1.3.>
    marginBottom: 10,    
    textAlign: "center", 
    // </IV.1.3.>
    fontSize: 22,
    fontWeight: "bold",
  },
  // <IV.1.3.>
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  location: {
    fontSize: 16,
    marginTop: 8,
    color: "#888",
  },
  // </IV.1.3.>


  // <IV.3.3.>
  time: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  // </IV.3.3.>
});