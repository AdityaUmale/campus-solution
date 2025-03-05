import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'

type TextInputFieldProps = {
  readonly label: string,
  readonly onChangeText: (text:string) => void
  readonly password?: boolean
}

export default function TextInputField({label, onChangeText, password=false}: TextInputFieldProps) {
  return (
    <View style={{
      marginTop: 15
    }}>
      <Text style={{ color: Colors.GRAY}}>{label}</Text>
      <TextInput placeholder={label} style={styles.TextInput}
      secureTextEntry={password}
      />
    </View>
  )
} 

const styles = StyleSheet.create({
  TextInput: {
    padding : 15,
    borderWidth: 0.2,
    borderRadius: 5,
    marginTop: 5,
    fontSize: 17
  }
})
