import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TextInput, Button, Text } from "react-native";
import { getFirestore, addDoc, collection, serverTimestamp, onSnapshot, orderBy } from 'firebase/firestore'
import app from "./Config/firebase";
import WelcomeScreen from "./WelcomeScreen";

const db = getFirestore(app);

const ChatScreens = (props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Store messages retrieved from Firestore
  const username = props.route.params.username
  const onSendPressed = async () => {
    try {
      if (message) {
        await addDoc(collection(db, "Chat"), {
          text: message,
          sender: username, // Assuming the sender is "You"
          timestamp: serverTimestamp()
        });
        setMessage(""); // Clear the input field after sending
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Use useEffect to fetch and update messages from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Chat"),orderBy("timestamp","desc") ,(querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const timestamp = data.timestamp;
        if (timestamp) {
          messages.push({
            id: doc.id,
            text: data.text,
            sender: data.sender,
            timestamp: timestamp.seconds, // Access "seconds" property
          });
        }
      });
      setMessages(messages);
    });
  
    return () => unsubscribe();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
      data={messages.slice().reverse()}

  renderItem={({ item }) => {
    return (
      username === item.sender ?
      
       <View style={{ width: '60%', margin: 5, backgroundColor: 'green', alignSelf: 'flex-end', padding: 5, borderRadius: 5 }}>
       <Text style={{ fontWeight: 'bold' }}>{item.sender}</Text>
        <Text>{item.text}</Text>
        <Text>{new Date(item.timestamp * 1000).toLocaleString()}</Text>
        </View>:
        <View style={{ width: '60%', margin: 5, backgroundColor: '#d3d3d3', padding: 5, borderRadius: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.sender}</Text>
        <Text>{item.text}</Text>
        <Text>{new Date(item.timestamp * 1000).toLocaleString()}</Text>
      </View>
    );
  }}
  keyExtractor={(item) => item.id}
/>


      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{
            borderWidth: 1,
            height: 30,
            width: '80%',
            margin: 5
          }}
          placeholder="Write message here.."
          value={message}
          onChangeText={(t) => setMessage(t)}
        />
        <Button title="Send" onPress={onSendPressed} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
});

export default ChatScreens;
