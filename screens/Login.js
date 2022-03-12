import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
// import { useNavigation } from '@react-navigation/native'

const Login = () => {

const [email, setEmail] = useState('')
const [pw, setPw] = useState('')

const navigation = useNavigation()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
       if (user) {
            navigation.replace('Home')
       }
  })   
  return unsubscribe
}, [])


const handleSignUp = () => {
     auth
     .createUserWithEmailAndPassword(email, pw)
     .then(userCredentials => {
          const user = userCredentials.user;
     })
     .catch(err => alert(err.message))
}

const handleLogin = ( ) => {
     auth
     .signInWithEmailAndPassword(email, pw)
     .then(userCredentials => {
          const user = userCredentials.user;
     })
     .catch(err => alert(err.message))
}

     return (
          <KeyboardAvoidingView style={styles.container} behavior="padding">

               <View style={styles.inputContainer}>
                    <TextInput
                         placeholder='Email'
                         value={ email }
                         onChangeText={txt => setEmail(txt)}
                         style={styles.input}
                         secureTextEntry
                    />
                    <TextInput
                         placeholder='Password'
                         value={ pw }
                         onChangeText={txt => setPw(txt)}
                         style={styles.input}
                         secureTextEntry
                    />

                    <View style={styles.buttonContainer}>
                         <TouchableOpacity
                              onPress={handleLogin}
                              style={styles.button}
                         >
                              <Text style={styles.buttonText}>Login</Text>
                         </TouchableOpacity>
                         <TouchableOpacity
                              onPress={handleSignUp}
                              style={[styles.button, styles.buttonOutline]}
                         >
                              <Text style={styles.buttonOutlineText}>Register</Text>
                         </TouchableOpacity>

                    </View>


               </View>

          </KeyboardAvoidingView>
     )
}

export default Login

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     inputContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
     },
     input: {
          backgroundColor: 'white',
          width: '100%',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 5,
     },
     buttonContainer: {
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
     },
     button: {
          backgroundColor: '#0782F9',
          width: '100%',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
     },
     buttonOutline: {
          backgroundColor: 'white',
          marginTop: 5,
          borderColor: '#0782F9',
          borderWidth: 2,
     },
     buttonText: {
          color: 'white',
          fontWeight: '700',
          fontSize: 16,
     },
     buttonOutlineText: {
          color: '#0782F9',
          fontWeight: '700',
          fontSize: 16,
     },

});
