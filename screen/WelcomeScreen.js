import React, { useState } from 'react';
import {Text,Image,View,StyleSheet,TextInput,Button,TouchableOpacity} from "react-native"
import Inputs from './compounds/Inputs';
import Buttons from './compounds/Buttons';
import Loginbutton from './compounds/Loginbotton';
import Signup from './Signup';
import ChatScreens from './ChatScreens';
const WelcomeScreen=(props)=>{
    const[textInputValue, setTextInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
      const OnhandleText=()=>{
        if(textInputValue.trim() !=='')
        {
            props.navigation.navigate('ChatScreens', { username: textInputValue }); 
        }
        else 
        {
            setErrorMessage('please enter user name')
        }
      }
    return(
        <View style={styles.container}>
    <View style={styles.img}>
    <Image source={require('../assets/mlogo.png')}/>
    </View>
    <Text style={{color:'white',fontWeight:'bold',fontSize:35,marginLeft:20}}>Welcome!</Text>
    <View style={styles.subcontainer}>
    <Inputs
          placeholder="Enter something" // Add a placeholder for the input field
          value={textInputValue}
          onChangeText={(text) => {
            setTextInputValue(text);
            // Clear the error message when the user starts typing.
            setErrorMessage('');
          }}
        />
        
        <Buttons title='Continues' onPress={OnhandleText} />
        {errorMessage !== '' && ( // Show error message if not empty
          <Text style={{ color: 'red', alignSelf: 'center' }}>{errorMessage}</Text>
        )}
        

        <Text style={{color:'#FFFFFF',marginTop:10,alignSelf:'center'}}>or</Text>
        <Loginbutton 
  title="Continue with Facebook"
  icon={require('../assets/facebook.png')}
/>
<Loginbutton 
  title="Continue with Gmail"
  icon={require('../assets/google.png')}
/>
<Loginbutton 
  title="Continue with Apple"
  icon={require('../assets/apple.png') }
/>
<View style={{flexDirection:'row'}}>
<Text style={{color:'white',marginTop:10,marginLeft:20,fontSize:15}}>Don't have an account?</Text>
<TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}>
<Text style={{color:'#1B9CA9',marginTop:10,marginLeft:2,fontSize:15}}>Sign Up</Text>
</TouchableOpacity>
    </View>
    <TouchableOpacity>
<Text style={{color:'#1B9CA9',marginTop:10,marginLeft:20,fontSize:15}}>Forget Password?</Text>
</TouchableOpacity>
    </View>
    
    </View>
    )
}
const styles=StyleSheet.create(
    {
        container:{

            flex:1,
            backgroundColor:'black'
        }, 
         img:{
            width: 200, 
            height: 200, 
            resizeMode: 'contain', 
            marginLeft:40,
            marginTop:50
         }
        ,
        subcontainer:{
            height:'56%',
            width:'85%',
            marginLeft:28,
            marginTop:25,
            marginBottom:30,
            borderRadius:20,
            marginRight:30,
            backgroundColor:'#FFFFFF0D'
        }
    }
)
 export default WelcomeScreen;