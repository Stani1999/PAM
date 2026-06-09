// Lab VI.1.3.
import { validateEventForm } from "../utils/validation"; // <VI.2.3./>
import { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { EventItem } from "../types/Event";
import { styles } from "../styles/AddEventFormStyles";

type AddEventFormProps = {
  onAddEvent: (event: Omit<EventItem, "eventId">) => void;
};

export default function AddEventForm({ onAddEvent }: AddEventFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [speaker, setSpeaker] = useState(""); // <VI.2.1./>

  const handleAddEvent = () => {
  // <VI.2.3.>
    // if (!title || !description || !location || !time || !date || !category
    //    || !speaker) { // <VI.2.1./>
    //   Alert.alert("Error", "All fields must be completed.");
    //   return;
    // }
  const errorMessage = validateEventForm(title, date, description, location, time, category, speaker);
      
  if (errorMessage) {
      Alert.alert("Validation Error", errorMessage);
      return;
  }
  // </VI.2.3.>

    onAddEvent({
    title,
    description,
    location,
    time,
    date,
    category,
    speaker // <VI.2.1./>
    });

    // <VI.2.3.>
    Alert.alert("Success!", "Event added successfully.");
    // </VI.2.3.>

    setTitle("");
    setDescription("");
    setLocation("");
    setTime("");
    setDate("");
    setCategory("");
    setSpeaker(""); // <VI.2.1./>
  };

  // <VI.2.5.>
  const handleClearForm = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setTime("");
    setDate("");
    setCategory("");
    setSpeaker("");
  };
  // </VI.2.5.>

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Event Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      {/* <VI.2.1.> */}
      <TextInput
        placeholder="Speaker"
        value={speaker}
        onChangeText={setSpeaker}
        style={styles.input}
      />
      {/* </VI.2.1.> */}  
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Time (e.g., 18:00)"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Date (e.g., 2026-03-20)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button title="Add Event" onPress={handleAddEvent} />

      {/* <VI.2.5.> */}
      <View style={{ marginTop: 10 }}>
        <Button title="Clear Form" onPress={handleClearForm} color="#ff4444" />
      </View>
      {/* </VI.2.5.> */}

    </View>
  );
}