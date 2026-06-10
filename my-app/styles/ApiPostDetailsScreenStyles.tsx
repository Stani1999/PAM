// Lab VII.1.5.
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textTransform: "capitalize",
  },
  meta: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },

  // <IX.1.5.>
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    marginTop: 12,
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginHorizontal: 20,
  },
  author: {
    fontSize: 15,
    color: "#555",
    marginBottom: 16,
  },
  // </IX.1.5.>

  // <IX.2.1.>
  comments: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  // </IX.2.1.>

  // <X.2.3.>
  buttonContainer: {
    marginTop: 24,
  },
  // </X.2.3.>
});