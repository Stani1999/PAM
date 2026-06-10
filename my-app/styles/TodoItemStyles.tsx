// Lab VIII.2.2.
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "capitalize",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
  completed: {
    color: "#28a745",
  },
  pending: {
    color: "#dc3545",
  },
});