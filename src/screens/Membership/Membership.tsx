import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { MainContent } from './components'
import { Modalize } from 'react-native-modalize'
import { Button } from 'native-base'

const Membership = () => {
  const modalizeRef = useRef<Modalize>(null);

  // useEffect(() => {
  //   modalizeRef.current?.open();
  // }, [])
  // const onOpen = () => {
  //   modalizeRef.current?.open();
  // };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
        {/* <Button onPress={() => modalizeRef.current?.open()}>
          12321321
        </Button> */}
          <Text style={styles.headerLabel}>Đặc quyền thành viên</Text>
          <TouchableOpacity>
            <IconEntypo name="dots-three-horizontal" size={20} color="white" />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity> */}
      </View>
      <Modalize ref={modalizeRef} alwaysOpen={600}  withHandle={false} handlePosition="outside">
        <MainContent />
        <Button onPress={() => modalizeRef.current?.close()}>
          12321321
        </Button>
      </Modalize>
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