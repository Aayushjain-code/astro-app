// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const Settings = () => {
//   return (
//     <View>
//       <Text>Settings</Text>
//     </View>
//   );
// };
// const styles = StyleSheet.create({});

// export default Settings;

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !feedback.trim()) {
      Alert.alert("Validation Error", "Please fill in all the fields");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert("Validation Error", "Please enter a valid email address");
      return;
    }
    const message = `Thank you ${name} for your feedback!`;
    setThankYouMessage(message);
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Feedback Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.feedbackInput]}
        placeholder="Feedback"
        onChangeText={(text) => setFeedback(text)}
        value={feedback}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {thankYouMessage ? (
        <Text style={styles.thankYou}>{thankYouMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  feedbackInput: {
    height: 100,
    paddingTop: 10,
    textAlignVertical: "top",
  },
  thankYou: {
    fontSize: 20,
    marginTop: 20,
    color: "green",
    textAlign: "center",
  },
});

export default Settings;
