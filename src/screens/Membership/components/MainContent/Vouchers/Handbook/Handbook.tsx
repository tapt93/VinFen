import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconFeather from 'react-native-vector-icons/Feather';

type Props = {
  title: string;
  description: string;
}

const Handbook = ({ title, description }: Props) => {
  return (
    <View style={styles.container}>
      <IconFeather name="target" size={40} />
      <Text style={styles.bold}>
        {title}
      </Text>
      <Text>
        {description}
      </Text>
      <View style={styles.lineStyle} />
      <Pressable>
        <Text style={[styles.buttonText, styles.bold]}>View details</Text>
      </Pressable>
    </View>
  )
}

export default Handbook

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#fafafa',
    borderWidth: 0.5,
    padding: 10
  },
  bold: {
    fontWeight: 'bold'
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#fafafa',
  },
  buttonText: {
    color: 'blue'
  }
})