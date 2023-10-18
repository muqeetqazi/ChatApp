import React, { useState } from 'react';
import {Text,Image,View,StyleSheet,TextInput} from "react-native"
const Inputs=(props)=>{
    const[textInputValue, setTextInputValue] = useState('');
    return(
        
    <View style={styles.container} >
        <View style={{marginLeft:20}}>
    <TextInput
        style={styles.input}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
      </View>
</View>
    )
}

const styles=StyleSheet.create(
    {
        container:{
        backgroundColor:'#D9D9D9',
        borderRadius:10,
        height:43,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        width:'90%',
        marginTop:30
        }
    }
)
export default Inputs;