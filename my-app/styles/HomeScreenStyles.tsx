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
  // <XI.3.2.>
  searchInput: {
    width: "92%",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  categoryRow: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#ffffff",
  },
  categoryButtonSelected: {
    backgroundColor: "#444444",
  },
  categoryButtonText: {
    color: "#444444",
    fontWeight: "600",
  },
  categoryButtonTextSelected: {
    color: "#ffffff",
  },
  emptyStateText: {
    width: "100%",
    textAlign: "center",
    color: "#666666",
    marginTop: 20,
    marginBottom: 20,
  },
  // </XI.3.2.>
});