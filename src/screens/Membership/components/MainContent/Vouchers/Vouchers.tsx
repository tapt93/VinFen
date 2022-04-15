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
            onPress={() => setSelectedCategory(key)}
          >
            <View
              style={[
                styles.categoryTab,
                selectedCategory === key ? styles.activeTab : null
              ]}
            >
              <Text style={{ color: selectedCategory === key ? '#007bff' : '#000' }}>{c}</Text>
            </View>
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
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  categoryTab: {
    backgroundColor: '#ddd',
    padding: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    borderWidth: 2,
    borderColor: '#007bff',
    backgroundColor: '#fff'
  },
  activeText: {
    color: '#007bff'
  }
})