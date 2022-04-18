import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VCardNoBorder } from 'components'

const VoucherList = () => {
  const data = [
    {
      img: 'https://cf.shopee.vn/file/1da0e25b5f70e218e4ac0cb6c1a50d2a',
      title: 'Combo ưu đãi giảm 45% chỉ còn 365,000đ'
    },
    {
      img: 'https://cf.shopee.vn/file/1da0e25b5f70e218e4ac0cb6c1a50d2a',
      title: 'Combo ưu đãi giảm 45% chỉ còn 365,000đ'
    },
    {
      img: 'https://cf.shopee.vn/file/1da0e25b5f70e218e4ac0cb6c1a50d2a',
      title: 'Combo ưu đãi giảm 45% chỉ còn 365,000đ'
    },
    {
      img: 'https://cf.shopee.vn/file/1da0e25b5f70e218e4ac0cb6c1a50d2a',
      title: 'Combo ưu đãi giảm 45% chỉ còn 365,000đ'
    },
    {
      img: 'https://cf.shopee.vn/file/1da0e25b5f70e218e4ac0cb6c1a50d2a',
      title: 'Combo ưu đãi giảm 45% chỉ còn 365,000đ'
    },
  ]

  return (
    <View style={styles.container}>
      {data.map(({ img, title }, index) => {
        return (
          <View style={styles.voucherItem} key={index}>
            <VCardNoBorder
              img={img}
              title={title}
              footer={<Text>abc</Text>}
            />
          </View>
        );
      })}
    </View>
  )
}

export default VoucherList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  voucherItem: {
    padding: 5,
    width: '50%'
  }
})