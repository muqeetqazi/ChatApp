import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

const Loginbutton = (props) => {
    
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.buttonContent}>
        <View style={{marginLeft:-10}}>
        {props.icon && <Image source={props.icon} style={styles.icon} />}
        </View>
        <View style={{marginLeft:20}}>
        <Text style={styles.buttonText}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'gray',
    height: 43,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10, // Add spacing between icon and text
  },
});

export default Loginbutton;
