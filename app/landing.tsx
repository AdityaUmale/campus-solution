import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
import Button from '@/data/Shared/Button'

export default function landing() {
  return (
    <View>
      <Image source={require('../assets/images/login.png')} style={{width: '100%', height: 300}} />
    
    <View style={{
        padding: 20,
    }}>
        <Text style = {{
            fontSize: 35,
            fontWeight: 'bold',
            textAlign: 'center',
        }}>Welcome to College Solution</Text>

        <Text style={{
            fontSize: 17,
            textAlign: 'center',
            marginTop: 10,
            color: Colors.GRAY
        }}>Your College news, Updated in your pocket, join the club and get updates on your favourite college news.</Text>

      <Button text='Get Started' onPress={() => console.log('Button Pressed')}/>

        <Text style={{
          fontSize: 16,
          textAlign: 'center',
          color: Colors.GRAY,
          marginTop: 7
        }}
        >Already have an account? signin here</Text>

    </View>
    </View>
  )
}