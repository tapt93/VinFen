import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { MainContent } from './components'

const Membership = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Đặc quyền thành viên</Text>
          <TouchableOpacity>
            <IconEntypo name="dots-three-horizontal" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <MainContent />
      </View>      
    </>
  )
}

export default Membership

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#26355C",
    flex: 1
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20
  },
  headerLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
})