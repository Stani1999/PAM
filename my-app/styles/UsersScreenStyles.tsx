// Lab VIII.1.6.
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 12,
    marginBottom: 12,
  },
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
});