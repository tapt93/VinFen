import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

const Vouchers = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const categories = ['All', 'F&B', 'Fashion', 'Beauty', 'Others'];
 
  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        {categories.map((c, key) => (
          <TouchableWithoutFeedback
            key={key}
            style={[
              styles.categoryTab,
              selectedCategory === key ? styles.activeTab : null
            ]}
            onPress={() => setSelectedCategory(key)}
          >
            <Text>{c}</Text>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  )
}

export default Vouchers

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    height: '100%'
  },
  categories: {

  },
  categoryTab: {

  },
  activeTab: {

  }
})