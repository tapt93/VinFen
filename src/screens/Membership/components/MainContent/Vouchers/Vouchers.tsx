import { ScrollView } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Handbook from './Handbook/Handbook';
import VoucherList from './VoucherList/VoucherList';

const Vouchers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'F&B', 'Fashion', 'Beauty', 'Others'];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <View style={styles.categories}>
          {categories.map((c, key) => (
            <TouchableWithoutFeedback
              key={c}
              onPress={() => setSelectedCategory(c)}
            >
              <View
                style={[
                  styles.categoryTab,
                  selectedCategory === c ? styles.activeTab : null
                ]}
              >
                <Text style={{ color: selectedCategory === c ? '#007bff' : '#000' }}>{c}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>

        <View style={styles.tabContent}>
          <VoucherList />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.h2}>VinID member handbook</Text>
        <View>
          <Handbook title='Bí kíp lên hạng' description='Khám phá ngay cách lên hạng thần tốc' />
        </View>
      </View>

      <View style={[styles.section, styles.lastSection]}>
        <Text>VinID Membership Privilege Policy</Text>
      </View>
    </ScrollView>
  )
}

export default Vouchers

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  categoryTab: {
    backgroundColor: '#fafafa',
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
  },
  tabContent: {
    marginTop: 10
  },
  section: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10
  },
  lastSection: {
    marginBottom: 0
  },
  h2: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20
  }
})