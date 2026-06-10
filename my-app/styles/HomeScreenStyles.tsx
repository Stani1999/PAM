// Lab III.2.2.
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // <IV.1.2.>
    backgroundColor: "#f2f2f2",
    paddingTop: 20,
    // <IV.1.2./>
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {                     // <IV.1.2./> title -> header
    // <IV.1.2.>
    fontWeight: "bold",
    marginHorizontal: 12,
    // <IV.1.2./>
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 12, 
    marginBottom: 10, 
  },
});