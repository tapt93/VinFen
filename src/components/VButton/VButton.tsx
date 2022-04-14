import { RADIUS } from 'constants/styles'
import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

const VButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={styles.buttonOutline}
    >
      {props.children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonOutline: {
    borderWidth: 1,
    borderRadius: RADIUS
  }
})
export default VButton;