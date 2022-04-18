import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
type Props = {
  footer: React.ReactNode;
  children: React.ReactNode;
};
const TitleCategory = (props: Props) => {
  return (
    <View style={styles.title}>
      <Text style={[styles.text, styles.fs18]}> {props.children} </Text>
      <View>{props.footer}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '500',
    color: '#22313f',
  },
  fs18: {
    fontSize: 18,
  },
  blue: {
    color: 'blue',
  },
});
export default TitleCategory;
