import React, { useState } from "react";
import { View,Text,Button } from "react-native";
import app from "./Config/firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const db=getFirestore(app)
const ChatScreen=(props)=>{
    const[message,setMessage]=useState("");
    const onSendPressed = async () => {
        try {
          if (message) {
            await addDoc(collection(db, "Chat"), {
              text: message,
              sender:"me", // Assuming the sender is "You"
              timeStamp: serverTimestamp()
            });
            setMessage(""); // Clear the input field after sending
          }
        } catch (e) {
          console.log(e);
        }
      }
return(
    <View>
    <Text>this is text ChatScreen</Text>
<Button title="send" onPress={onSendPressed}/>
</View>
    )
    }

export default ChatScreen;